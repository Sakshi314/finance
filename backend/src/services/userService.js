const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await User.create({ ...userData, password: hashedPassword });
    return user;
  }

  async authenticateUser({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return token;
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }
}

module.exports = new UserService();
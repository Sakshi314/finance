const userService = require('../services/userService');

class UserController {
  async registerUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async loginUser(req, res) {
    try {
      const token = await userService.authenticateUser(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  async getUserProfile(req, res) {
    try {
      const user = await userService.getUserById(req.user.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
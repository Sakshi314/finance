const { User } = require('../../../models/user');

const userResolver = {
    Query: {
        getUser: async(_, {id}) => {
            try {
                return await User.findByPk(id);
            } catch (error) {
                console.error('Error fetching user:', error);
                return null;
            }
        },
        getAllUsers: async() => {
            try {
                return await User.findAll();
            } catch (error) {
                console.error('Error fetching all users:', error);
                return [];
            }
        },
    },

    Mutation: {
        createUser: async(_, { name, email, password, role }) => {
            try{
                return await User.create({ name, email, password, role});
            }
            catch(err){
                console.error('Error criting user:', err);
                return null;
            }
        },
        updateUser: async(_, { id, name, email, role }) => {
            try{
                const user = await User.findByPk(id);
                if(!user) return null;
                return await user.update({ id, name, email, role });
            }
            catch(err){
                console.error('Error updating user:', err);
                return null;
            }
        },
        deleteUser: async(_, {id}) => {
            try {
                const user = await User.findByPk(id);
                if(!user) return false;
                await user.destroy();
                return true;
            }
            catch(err) {
                console.error('Error deleting user:', err);
                return false; 
            }
        }

    }
}
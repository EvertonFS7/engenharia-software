class UserController {
    constructor(UserModel) {
      this.UserModel = UserModel;
    }
  
    getAllUsers(req, res) {
      const users = this.UserModel.getAllUsers();
      res.json(users);
    }
  
    getUserById(req, res) {
      const userId = req.params.id;
      const user = this.UserModel.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }
  
    createUser(req, res) {
      const newUser = req.body;
      const createdUser = this.UserModel.createUser(newUser);
      res.status(201).json(createdUser);
    }
  
    updateUser(req, res) {
      const userId = req.params.id;
      const updatedUserData = req.body;
      const updatedUser = this.UserModel.updateUser(userId, updatedUserData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }
  
    deleteUser(req, res) {
      const userId = req.params.id;
      const deletedUser = this.UserModel.deleteUser(userId);
      if (deletedUser) {
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }
  }
  
  module.exports = UserController;
  
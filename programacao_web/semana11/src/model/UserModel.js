class UserModel {
    constructor() {
      this.users = [];
    }
  
    getAllUsers() {
      return this.users;
    }
  
    getUserById(userId) {
      return this.users.find(user => user.id === userId);
    }
  
    createUser(userData) {
      const newUser = { id: this.generateUserId(), ...userData };
      this.users.push(newUser);
      return newUser;
    }
  
    updateUser(userId, updatedUserData) {
      const userIndex = this.users.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
        this.users[userIndex] = { id: userId, ...updatedUserData };
        return this.users[userIndex];
      }
      return null;
    }
  
    deleteUser(userId) {
      const userIndex = this.users.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
        const deletedUser = this.users[userIndex];
        this.users.splice(userIndex, 1);
        return deletedUser;
      }
      return null;
    }
  
    generateUserId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }
  }
  
  module.exports = UserModel;
  
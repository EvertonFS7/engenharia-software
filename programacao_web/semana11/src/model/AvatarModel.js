class AvatarModel {
    constructor() {
      this.avatars = [];
    }
  
    getAllAvatars() {
      return this.avatars;
    }
  
    getAvatarById(avatarId) {
      return this.avatars.find(avatar => avatar.id === avatarId);
    }
  
    createAvatar(avatarData) {
      const newAvatar = { id: this.generateAvatarId(), ...avatarData };
      this.avatars.push(newAvatar);
      return newAvatar;
    }
  
    updateAvatar(avatarId, updatedAvatarData) {
      const avatarIndex = this.avatars.findIndex(avatar => avatar.id === avatarId);
      if (avatarIndex !== -1) {
        this.avatars[avatarIndex] = { id: avatarId, ...updatedAvatarData };
        return this.avatars[avatarIndex];
      }
      return null;
    }
  
    deleteAvatar(avatarId) {
      const avatarIndex = this.avatars.findIndex(avatar => avatar.id === avatarId);
      if (avatarIndex !== -1) {
        const deletedAvatar = this.avatars[avatarIndex];
        this.avatars.splice(avatarIndex, 1);
        return deletedAvatar;
      }
      return null;
    }
  
    generateAvatarId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }
  }
  
  module.exports = AvatarModel;
  
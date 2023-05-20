class AvatarController {
    constructor(AvatarModel) {
      this.AvatarModel = AvatarModel;
    }
  
    getAllAvatars(req, res) {
      const avatars = this.AvatarModel.getAllAvatars();
      res.json(avatars);
    }
  
    getAvatarById(req, res) {
      const avatarId = req.params.id;
      const avatar = this.AvatarModel.getAvatarById(avatarId);
      if (avatar) {
        res.json(avatar);
      } else {
        res.status(404).json({ error: 'Avatar not found' });
      }
    }
  
    createAvatar(req, res) {
      const newAvatarData = req.body;
      const newAvatar = this.AvatarModel.createAvatar(newAvatarData);
      res.status(201).json(newAvatar);
    }
  
    updateAvatar(req, res) {
      const avatarId = req.params.id;
      const updatedAvatarData = req.body;
      const updatedAvatar = this.AvatarModel.updateAvatar(avatarId, updatedAvatarData);
      if (updatedAvatar) {
        res.json(updatedAvatar);
      } else {
        res.status(404).json({ error: 'Avatar not found' });
      }
    }
  
    deleteAvatar(req, res) {
      const avatarId = req.params.id;
      const deletedAvatar = this.AvatarModel.deleteAvatar(avatarId);
      if (deletedAvatar) {
        res.json({ message: 'Avatar deleted' });
      } else {
        res.status(404).json({ error: 'Avatar not found' });
      }
    }
  }
  
  module.exports = AvatarController;
  
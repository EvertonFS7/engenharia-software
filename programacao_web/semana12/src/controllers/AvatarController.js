const Avatar = require('../models/Avatar');
const Item = require('../models/Item');

class AvatarController {
  async findById(req, res) {
    try {
      const { id } = req.params;

      const avatar = await Avatar.findByPk(id, {
        include: {
          model: Item,
          as: 'items'
        }
      });

      if (!avatar) {
        return res.status(404).json({ message: 'Avatar not found' });
      }

      return res.json(avatar);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new AvatarController();

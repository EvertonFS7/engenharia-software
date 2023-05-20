const express = require('express');
const avatarController = require('../controllers/AvatarController');

const routes = express.Router();

routes.get('/avatars/:id', avatarController.findById);

module.exports = routes;

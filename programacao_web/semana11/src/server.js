const express = require('express');
const app = express();
const AvatarController = require('./controllers/AvatarController');
const AvatarModel = require('./model/AvatarModel');
const UserController = require('./controllers/UserController');
const UserModel = require('./model/UserModel');

app.use(express.json());

const avatarController = new AvatarController(new AvatarModel());

app.get('/avatars', avatarController.getAllAvatars.bind(avatarController));
app.get('/avatars/:id', avatarController.getAvatarById.bind(avatarController));
app.post('/avatars', avatarController.createAvatar.bind(avatarController));
app.put('/avatars/:id', avatarController.updateAvatar.bind(avatarController));
app.delete('/avatars/:id', avatarController.deleteAvatar.bind(avatarController));

const userController = new UserController(new UserModel());

app.get('/users', userController.getAllUsers.bind(userController));
app.get('/users/:id', userController.getUserById.bind(userController));
app.post('/users', userController.createUser.bind(userController));
app.put('/users/:id', userController.updateUser.bind(userController));
app.delete('/users/:id', userController.deleteUser.bind(userController));

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

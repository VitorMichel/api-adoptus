const { Router } = require('express');

const SignInController = require('./controllers/SignInController.js');
const SignUpController = require('./controllers/SignUpController.js');
const PetsController = require('./controllers/PetsController.js');
const EditProfileController = require('./controllers/EditProfileController.js');
const MyPetsController = require('./controllers/MyPetsController.js');
const AddPetController = require('./controllers/AddPetController.js');

const routes = Router();

routes.post('/signin', SignInController.index);
routes.post('/signup', SignUpController.index);
routes.post('/addpet', AddPetController.index);
routes.get('/pets', PetsController.index);
routes.get('/mypets', MyPetsController.index);
routes.get('/pegardadosperfil', EditProfileController.pegar_dados);
routes.put('/editprofile', EditProfileController.index);

module.exports = routes;
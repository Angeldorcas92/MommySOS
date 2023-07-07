const express = require('express');
const Router = express.Router();
const { registerValidation } = require('../joi')
const { getAllUsers, createUser, updateUser, deleteUser, loginUser, logOut } = require('../controller/userController');


 

Router.get('/users', getAllUsers);
Router.post('/users', createUser,);
Router.put('/users/:id', updateUser);
Router.delete('/users/:id', deleteUser);
Router.post('/users', loginUser);
Router.post('users', logOut)




module.exports = Router;


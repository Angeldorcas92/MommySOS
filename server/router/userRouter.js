const express = require('express');
const Router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser, loginUser } = require('../controller/userController');

Router.get('/users', getAllUsers);
Router.post('/users', createUser,);
Router.put('/users/:id', updateUser);
Router.delete('/users/:id', deleteUser);
Router.post('/users', loginUser);





module.exports = Router;


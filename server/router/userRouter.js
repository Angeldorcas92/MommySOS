const express = require('express');
const Router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controller/userController');

Router.get('/users', getAllUsers);
Router.post('/users', createUser);
Router.put('/users/:id', updateUser);
Router.delete('/users/:id', deleteUser);

module.exports = Router;


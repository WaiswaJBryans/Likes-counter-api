const express = require('express');
const Router = express.Router();
const likesController = require('./likes.controller');

Router.get('/', likesController.getLikes);
Router.post('/', likesController.addLikes);
Router.post('/decrement', likesController.removeLikes);

module.exports = Router;
const express = require('express');
const routes = express.Router();

const UsersController = require('./controllers/UsersController');
const ProjectsController = require('./controllers/ProjectsController')

// Users
routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)

// Projects
routes.get('/projects', ProjectsController.index)
routes.post('/projects', ProjectsController.create)
routes.put('/projects/:id', ProjectsController.update)
routes.delete('/projects/:id', ProjectsController.delete)


module.exports = routes;
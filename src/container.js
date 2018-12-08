const awilix = require('awilix');
const { asClass, asFunction, asValue } = awilix;

const container = awilix.createContainer();

// input layer
const Server = require('./input/http/Server');
const router = require('./input/http/router');
const usersController = require('./input/http/user/usersController');

container.register({
  server: asClass(Server),
  router: asFunction(router),
  usersController: asFunction(usersController)
});

// app layer
const createUser = require('./app/user/createUser');

container.register({
  createUser: asFunction(createUser)
});

// infra layer
const userRepository = require('./infra/user/userRepository');
const sequelizeModels = require('./infra/sequelize/models')

container.register({
  userRepository: asFunction(userRepository),
  sequelizeModels: asValue(sequelizeModels)
})

module.exports = container;
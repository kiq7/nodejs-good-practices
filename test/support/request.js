const supertest = require('supertest');
const container = require('../../src/container');
const server = container.resolve('server');

const request = () => supertest(server.express);
module.exports = request;

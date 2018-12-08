const models = require('../src/infra/sequelize/models');

beforeEach(async () => {
  await models.sequelize.truncate({ cascade: true });
});

afterAll(async () => {
  await models.sequelize.close();
});
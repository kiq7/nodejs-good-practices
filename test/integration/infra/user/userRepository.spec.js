const makeUserRepository = require('../../../../src/infra/user/userRepository');
const User = require('../../../../src/domain/user/User');
const models = require('../../../../src/infra/sequelize/models');

describe('userRepository', () => {
  let userRepository;

  before(() => {
    userRepository = makeUserRepository({
      sequelizeModels: models
    });
  });

  describe('#add', () => {
    it('adds a user to the database', async () => {
      const user = new User({
        name: 'Kaique',
        age: 26
      });

      const newUser = await userRepository.add(user);

      expect(newUser.id).toBeTruthy();
    });
  });
});
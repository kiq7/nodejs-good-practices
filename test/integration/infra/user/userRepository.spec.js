const makeUserRepository = require('../../../../src/infra/user/userRepository');
const User = require('../../../../src/domain/user/User');
const models = require('../../../../src/infra/sequelize/models');

describe('userRepository', () => {
  let userRepository;

  beforeAll(() => {
    userRepository = makeUserRepository({
      sequelizeModels: models
    });
  });

  describe('#add', () => {
    it('adds a user to the database', async () => {
      const user = new User({
        name: 'Kaique',
        age: 23
      });

      const newUser = await userRepository.add(user);

      expect(newUser.id).toBeTruthy();
      expect(newUser.name).toEqual('Kaique');
      expect(newUser.age).toEqual(23);
    });

    it('increases user count', async () => {
      const user = new User({
        name: 'Celio',
        age: 26
      });

      const firstCount = await userRepository.size();
      const newUser = await userRepository.add(user);
      const lastCount = await userRepository.size();

      expect(firstCount).toBe(0);
      expect(lastCount).toBe(1);
    });
  });
});
const makeCreateUser = require('../../../../src/app/user/createUser');

describe('createUser', () => {
  let createUser;
  describe('When user is not valid', () => {
    it('calls onInvalidUser callback', async () => {
      createUser = makeCreateUser({});
      const spy = jest.fn();

      await createUser({ user: 'Ciclana', age: 17 }, {
        onInvalidUser(validationError) {
          spy();
          expect(validationError.age).toBeTruthy();
        }
      });

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('everything is perfect!', () => {
    it('calls onSuccess callback', async () => {

      const mockUserRepository = {
        async add(user) {
          return user;
        }
      };


      createUser = makeCreateUser({
        userRepository: mockUserRepository
      });

      const spy = jest.fn();

      await createUser({ name: 'Kaique', age: 23 }, {
        onSuccess(user) {
          spy();
          expect(user).toBeTruthy;
        }
      });

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('when user can\'t be persisted', () => {
    it('calls onError callback', async () => {
      const mockUserRepository = {
        async add() {
          throw Error('Boom');
        }
      }

      createUser = makeCreateUser({
        userRepository: mockUserRepository
      });

      const spy = jest.fn();

      await createUser({ name: 'Kaique', age: 23 }, {
        onError(error) {
          spy();
          expect(error).toBeTruthy();
        }
      });

      expect(spy).toHaveBeenCalled();
    });
  });
});

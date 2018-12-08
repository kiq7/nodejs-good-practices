const User = require('../../domain/user/User');

const userRepository = ({ sequelizeModels }) => ({
  async add(user) {
    const databaseUser = this._toDatabase(user);
    const newDatabaseUser = await sequelizeModels.user.create(databaseUser);
    const newUser = this._fromDatabase(newDatabaseUser);

    return newUser;
  },

  async size() {
    return sequelizeModels.user.count();
  },

  _toDatabase(user) {
    return {
      name: user.name,
      age: user.age
    }
  },

  _fromDatabase(databaseUser) {
    return new User({
      id: databaseUser.id,
      name: databaseUser.name,
      age: databaseUser.age
    });
  }
});

module.exports = userRepository;
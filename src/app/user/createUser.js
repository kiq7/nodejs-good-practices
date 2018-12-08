const User = require('../../domain/user/User');

const createUser = ({ userRepository }) => {
  return async function (userData, {
    onSuccess,
    onInvalidUser,
    onError
  }) {
    const user = new User(userData);
    const validation = user.validate();

    if (!validation.isValid) {
      return onInvalidUser(validation.error);
    }

    try {
      const newUser = await userRepository.add(user);
      return onSuccess(newUser);
    }
    catch (error) {
      onError(error);
    }
  };
}

module.exports = createUser;
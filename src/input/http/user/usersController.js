const usersController = ({ createUser }) => ({
  async create(req, res) {
    const userData = req.body.user;

    await createUser(userData, {
      onSuccess: (user) => res.status(201).json(user),
      onInvalidUser: (error) => res.status(422).json(error),
      onError: (error) => res.status(500).json(error)
    });
  }
});

module.exports = usersController;
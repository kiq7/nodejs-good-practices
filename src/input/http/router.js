const { Router } = require('express');

const router = ({ usersController }) => {
  const appRouter = Router();
  appRouter.post('/users', usersController.create)

  return appRouter;
};

module.exports = router;
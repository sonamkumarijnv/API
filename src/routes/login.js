import express from 'express';

const loginRouter = express.Router();

loginRouter.get('/', (req, res) =>
  res.status(200).json({ message: 'Welcome to Express API login' })
);

loginRouter.get('/post', (req, res) =>
  res.status(200).json({ message: 'Welcome to Express API login3' })
);


export default loginRouter;
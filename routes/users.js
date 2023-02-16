import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res.json([
    {
      name: 'Juan Vasquez',
      nickname: 'juanvcas',
      email: 'some123@mail.com',
      password: 'asd1sdf52',
    },
    {
      name: 'Melissa Herrera',
      nickname: 'melih',
      email: 'some456@mail.com',
      password: 'ewr85rt6',
    },
    {
      name: 'Diego Higuita',
      nickname: 'dieguita',
      email: 'some789@mail.com',
      password: 'prfg963yug4',
    },
  ]);
});

usersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Diego Higuita',
    nickname: 'dieguita',
    email: 'some789@mail.com',
    password: 'prfg963yug4',
  });
});

export { usersRouter };

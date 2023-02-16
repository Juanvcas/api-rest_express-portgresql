import express from 'express';

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) => {
  res.json([
    {
      title: 'Category 1',
      description: 'This is a category description...',
    },
    {
      title: 'Category 2',
      description: 'This is a category description...',
    },
  ]);
});

categoriesRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    title: 'Category 1',
    description: 'This is a category description...',
  });
});

export { categoriesRouter };

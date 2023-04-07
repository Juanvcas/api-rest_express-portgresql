import express from 'express';
import cors from 'cors';
import router from './server/server.js';
import {
  boomErrorHandler,
  validationError,
  errorHandler,
} from './middlewares/errors.handler.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, this is an API made with Express.js');
});

router(app);

app.use(boomErrorHandler);
app.use(validationError);
app.use(errorHandler);

app.listen(port);

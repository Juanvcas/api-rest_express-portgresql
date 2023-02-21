import express from 'express';
import router from './server/server.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, this is a server in Express.js');
});

app.listen(port, () => {
  console.log(`Server runing on: http://localhost:${port}`);
});

try {
  router(app);
} catch (err) {
  console.error(err);
}

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is a server in Express.js');
});

app.get('/anything', (req, res) => {
  res.send("This is the another route's response");
});

app.get('/api', (req, res) => {
  res.json({
    id: 0,
    name: 'Juan Vasquez',
    username: 'juanvcas',
    email: 'juanvcas96@gmail.com',
  });
});

app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});

import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  res.send('Hallo Welt');
});

app.listen(8080, () => {
  console.log('server is listening');
});

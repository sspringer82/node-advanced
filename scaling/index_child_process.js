import express from 'express';
import { fork } from 'node:child_process';

const app = express();

let count = 0;

async function heavyWork() {
  return new Promise((resolve, reject) => {
    const child = fork('./child.js');
    child.on('message', (data) => {
      resolve(data);
    });
  });
}

app.get('/', async (req, res) => {
  const data = await heavyWork();
  res.send(data);
});

app.listen(8080, () => {
  console.log('server is listening');
});

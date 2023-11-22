import express from 'express';
import addressRouter from './addresses/router.js';

const app = express();
app.use(express.json());

app.use(addressRouter);

app.listen(8080, () => console.log('Server listens to http://localhost:8080'));

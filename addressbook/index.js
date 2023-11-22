import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.json({ firstname: 'Klaus', lastname: 'Müller' });
});

app.listen(8080, () => console.log('Server listens to http://localhost:8080'));

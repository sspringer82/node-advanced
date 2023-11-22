import express from 'express';

let addresses = [];

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.json(addresses);
});
app.get('/:id', (request, response) => {
  const parsedId = parseInt(request.params.id, 10);

  const foundAddress = addresses.find((address) => address.id === parsedId);

  if (foundAddress) {
    response.json(foundAddress);
  } else {
    response.statusCode = 404;
    response.json({ message: 'Not found' });
  }
});

app.post('/', (request, response) => {
  const nextId = Math.max(...addresses.map((address) => address.id)) + 1;

  const newAddress = { ...request.body, id: nextId };

  addresses.push(newAddress);

  response.statusCode = 201;
  response.json(newAddress);
});

app.patch('/:id', (request, response) => {
  const index = getIndexForId(request);

  if (index !== -1) {
    addresses[index] = { ...addresses[index], ...request.body };
  }

  response.json(addresses[index]);
});

app.put('/:id', (request, response) => {
  const index = getIndexForId(request);

  if (index !== -1) {
    addresses[index] = request.body;
  }

  response.json(addresses[index]);
});

app.delete('/:id', (request, response) => {
  const parsedId = parseInt(request.params.id, 10);
  addresses = addresses.filter((address) => address.id !== parsedId);

  response.status(204).send();
});

app.listen(8080, () => console.log('Server listens to http://localhost:8080'));

function getIndexForId(request) {
  const parsedId = parseInt(request.params.id);

  const index = addresses.findIndex((address) => address.id === parseInt);
  return index;
}

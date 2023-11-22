// get all
const url = 'http://localhost:8080';

async function getAll() {
  const response = await fetch(url);
  const data = await response.json();
  if (data && Array.isArray(data) && data.length === 3) {
    console.log('Getting all data works');
  } else {
    throw new Error('Getting all data failed');
  }
}

async function getOne(id = 1) {
  const response = await fetch(url + '/' + id);
  const data = await response.json();
  if (data && data.firstname === 'William') {
    console.log('Getting one data set works');
  } else {
    throw new Error('Getting one data set failed');
  }
}

async function create() {
  const newData = {
    firstname: 'Mallory',
    lastname: 'Logan',
    street: '34685 Justin Ways',
    place: 'Port Patriciashire',
    zip: '65065',
    country: 'Gambia',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData),
  });
  if (response.status !== 201) {
    throw new Error('Creating failed due to status');
  }
  const data = await response.json();
  if (data && data.id === 4 && data.firstname === 'Mallory') {
    console.log('Create works');
  } else {
    throw new Error('Create failed');
  }
}

async function update() {
  const updatedData = {
    id: 2,
    firstname: 'Lisa',
    lastname: 'Miller',
    street: '1 Main Str',
    place: 'New York',
    zip: '12345',
    country: 'U.S.',
  };

  const response = await fetch(url + '/2', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  if (response.status !== 200) {
    throw new Error('Updating failed due to status');
  }
  const data = await response.json();
  if (data && data.id === 2 && data.firstname === 'Lisa') {
    console.log('Update works');
  } else {
    throw new Error('Update failed');
  }
}

async function remove() {
  const response = await fetch(url + '/3', {
    method: 'DELETE',
  });

  if (response.status !== 204) {
    throw new Error('Delete due to status');
  } else {
    const get3Response = await fetch(url + '/3');
    if (get3Response.status !== 404) {
      throw new Error('deleting failed');
    } else {
      console.log('delete works');
    }
  }
}
await getAll();
await getOne();
await create();
await update();
await remove();

export default true;

// get all
const url = 'http://localhost:8080';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data && Array.isArray(data) && data.length === 3) {
      console.log('Getting all data works');
    } else {
      throw new Error('Getting all data failed');
    }
  });

// get one
fetch(url + '/1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data && data.firstname === 'William') {
      console.log('Getting one data set works');
    } else {
      throw new Error('Getting one data set failed');
    }
  });

// create
const newData = {
  firstname: 'Mallory',
  lastname: 'Logan',
  street: '34685 Justin Ways',
  place: 'Port Patriciashire',
  zip: '65065',
  country: 'Gambia',
};
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newData),
})
  .then((response) => {
    if (response.status !== 201) {
      throw new Error('Creating failed due to status');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (data && data.id === 3 && data.firstname === 'Mallory') {
      console.log('Create works');
    } else {
      throw new Error('Create failed');
    }
  });

// update
const updatedData = {
  firstname: 'Lisa',
  lastname: 'Miller',
  street: '1 Main Str',
  place: 'New York',
  zip: '12345',
  country: 'U.S.',
};

fetch(url + '/2', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedData),
})
  .then((response) => {
    if (response.status !== 200) {
      throw new Error('Creating failed due to status');
    }
    return response.json();
  })
  .then((data) => {
    if (data && data.id === 2 && data.firstname === 'Lisa') {
      console.log('Update works');
    } else {
      throw new Error('Update failed');
    }
  });

// delete
const response = await fetch(url + '/3', {
  method: 'DELETE',
});

if (response.status !== 204) {
  throw new Error('Delete due to status');
} else {
  // get one
  const get3Response = await fetch(url + '/3');
  if (get3Response.status !== 404) {
    throw new Error('deleting failed');
  }
}

export default true;

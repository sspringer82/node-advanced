import sqlite3 from 'sqlite3';

let addresses = [
  {
    id: 1,
    firstname: 'William',
    lastname: 'Jones',
    street: '776 Jillian Turnpike Apt. 913',
    place: 'North Daveton',
    zip: '43853',
    country: 'Estonia',
  },
  {
    id: 2,
    firstname: 'William',
    lastname: 'Gallegos',
    street: '47609 Bill Circle',
    place: 'Kristiborough',
    zip: '40306',
    country: 'Denmark',
  },
  {
    id: 3,
    firstname: 'Catherine',
    lastname: 'Smith',
    street: '94753 Jennings Estate',
    place: 'Johnmouth',
    zip: '63874',
    country: 'Hong Kong',
  },
];

const db = new sqlite3.Database('./db/db.sqlite3');

class Service {
  async getAll() {
    const query = 'SELECT * FROM Address';
    return new Promise((resolve, reject) => {
      db.all(query, function (error, rows) {
        if (error !== null) {
          reject(error);
        }
        resolve(rows);
      });
    });
  }

  async getOne(id) {
    const query = 'SELECT * FROM Address WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.get(query, [id], function (error, row) {
        console.log(this.lastID);
        if (error !== null) {
          reject(error);
        }
        resolve(row);
      });
    });
  }

  async create(newAddress) {
    const query =
      'INSERT INTO Address (firstname, lastname, street, place, zip, country) VALUES (?, ?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.run(
        query,
        [
          newAddress.firstname,
          newAddress.lastname,
          newAddress.street,
          newAddress.place,
          newAddress.zip,
          newAddress.country,
        ],
        function (error, row) {
          console.log(error, this.lastID);
          if (error !== null) {
            reject(error);
          }
          resolve({ ...newAddress, id: this.lastID });
        }
      );
    });

    let nextId = 1;
    if (addresses.length > 0) {
      nextId = Math.max(...addresses.map((address) => address.id)) + 1;
    }

    const createdAddress = { ...newAddress, id: nextId };

    addresses.push(createdAddress);

    return createdAddress;
  }

  async patch(parsedId, updatedAddress) {
    const index = addresses.findIndex((address) => address.id === parsedId);

    if (index !== -1) {
      addresses[index] = { ...addresses[index], ...updatedAddress };
    }

    return addresses[index];
  }
  async update(parsedId, updatedAddress) {
    const index = addresses.findIndex((address) => address.id === parsedId);

    if (index !== -1) {
      addresses[index] = updatedAddress;
      return addresses[index];
    }

    return false;
  }
  async remove(id) {
    addresses = addresses.filter((address) => address.id !== id);
  }
}

export default new Service();

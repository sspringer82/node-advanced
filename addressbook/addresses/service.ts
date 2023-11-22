import sqlite3 from 'sqlite3';
import type { Address, CreateAddress } from './declarations.js';

let addresses: Address[] = [
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

const db = new sqlite3.Database('../db/db.sqlite3');

class Service {
  async getAll(): Promise<Address[]> {
    const query = 'SELECT * FROM Address';
    return new Promise((resolve, reject) => {
      db.all(query, function (error, rows: Address[]) {
        if (error !== null) {
          reject(error);
        }
        resolve(rows);
      });
    });
  }

  async getOne(id: number): Promise<Address> {
    const query = 'SELECT * FROM Address WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.get(query, [id], function (error, row: Address) {
        if (error !== null) {
          reject(error);
        }
        resolve(row);
      });
    });
  }

  async create(newAddress: CreateAddress): Promise<Address> {
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
        function (error: unknown) {
          if (error !== null) {
            reject(error);
          }
          resolve({ ...newAddress, id: this.lastID });
        }
      );
    });
  }

  async patch(parsedId: number, updatedAddress: Address): Promise<Address> {
    const index = addresses.findIndex((address) => address.id === parsedId);

    if (index !== -1) {
      addresses[index] = { ...addresses[index], ...updatedAddress };
    }

    return addresses[index];
  }
  async update(
    parsedId: number,
    updatedAddress: Address
  ): Promise<Address | boolean> {
    const index = addresses.findIndex((address) => address.id === parsedId);

    if (index !== -1) {
      addresses[index] = updatedAddress;
      return addresses[index];
    }

    return false;
  }
  async remove(id: number): Promise<void> {
    addresses = addresses.filter((address) => address.id !== id);
  }
}

export default new Service();

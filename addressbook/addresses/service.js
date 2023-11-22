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

class Service {
  async getAll() {
    return addresses;
  }

  async getOne(id) {
    const foundAddress = addresses.find((address) => address.id === id);
    return foundAddress;
  }

  async create(newAddress) {
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

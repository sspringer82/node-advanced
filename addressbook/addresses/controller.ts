import { Request, Response } from 'express';

import service from './service.js';

class Controller {
  async getAll(request: Request, response: Response) {
    response.json(await service.getAll());
  }

  async getOne(request: Request, response: Response) {
    const parsedId = parseInt(request.params.id, 10);

    const foundAddress = await service.getOne(parsedId);

    if (foundAddress !== undefined) {
      response.json(foundAddress);
    } else {
      response.statusCode = 404;
      response.json({ message: 'Not found' });
    }
  }

  async create(request: Request, response: Response) {
    const newAddress = await service.create(request.body);

    response.statusCode = 201;
    response.json(newAddress);
  }

  async patch(request: Request, response: Response) {
    const parsedId = parseInt(request.params.id);

    const updatedAddress = await service.patch(parsedId, request.body);

    response.json(updatedAddress);
  }

  async update(request: Request, response: Response) {
    const parsedId = parseInt(request.params.id);

    const updatedAddress = await service.update(parsedId, request.body);

    if (updatedAddress === false) {
      response.status(404).send('not found');
    } else {
      response.json(updatedAddress);
    }
  }

  async remove(request: Request, response: Response) {
    const parsedId = parseInt(request.params.id, 10);

    await service.remove(parsedId);

    response.status(204).send();
  }
}

export default new Controller();

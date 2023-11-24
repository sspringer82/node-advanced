import { describe, it, expect, vi } from 'vitest';

import controller from './controller';
import { Request, Response } from 'express';

let getAllSpy;
let getOneSpy;

vi.mock('./service.js', () => {
  return {
    default: {
      getAll: (...args) => getAllSpy(...args),
      getOne: (...args) => getOneSpy(...args),
    },
  };
});

describe('Controller', () => {
  describe('.getAll()', () => {
    it('should send a json response', async () => {
      getAllSpy = vi.fn().mockResolvedValue([{ id: 1, firstname: 'Klaus' }]);
      const request = {} as unknown as Request;
      const response = {
        json: vi.fn(),
      } as unknown as Response;

      await controller.getAll(request, response);

      expect(response.json).toHaveBeenCalledWith([
        { id: 1, firstname: 'Klaus' },
      ]);
    });

    it('should return an empty array if there is no data', async () => {
      getAllSpy = vi.fn().mockResolvedValue([]);
      const request = {} as unknown as Request;
      const response = {
        json: vi.fn(),
      } as unknown as Response;

      await controller.getAll(request, response);

      expect(response.json).toHaveBeenCalledWith([]);
    });
  });

  describe('.getOne()', () => {
    it('should send a json response with an object', async () => {
      const request = {
        params: {
          id: '42',
        },
      } as unknown as Request;
      const response = {
        json: vi.fn(),
      } as unknown as Response;

      getOneSpy = vi.fn().mockResolvedValue({ id: 42, firstname: 'Petra' });

      await controller.getOne(request, response);

      expect(response.json).toHaveBeenCalledWith({
        id: 42,
        firstname: 'Petra',
      });
    });
    it('should send a 404 response if no object was found', async () => {
      const request = {
        params: {
          id: '42',
        },
      } as unknown as Request;
      const response = {
        statusCode: null,
        json: vi.fn(),
      } as unknown as Response;

      getOneSpy = vi.fn().mockResolvedValue(undefined);

      await controller.getOne(request, response);

      expect(response.json).toHaveBeenCalledWith({ message: 'Not found' });
      expect(response.statusCode).toBe(404);
    });
  });
});

import { describe, it, expect, vi } from 'vitest';

import controller from './controller';
import { Request, Response } from 'express';

let getAllSpy;

vi.mock('./service.js', () => {
  return {
    default: {
      getAll: (...args) => getAllSpy(...args),
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
});

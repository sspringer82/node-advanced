import { describe, it, expect } from 'vitest';
import {
  getFileContent,
  getFileContentCallback,
  getFileContentPromise,
} from './file.js';

describe('read file', () => {
  describe('read file sync', () => {
    it('should read sync', () => {
      const content = getFileContent();
      expect(content).toBe('Lorem Ipsum');
    });
  });

  describe('read file async callback', () => {
    it('should read async with callback', () => {
      const promise = new Promise((resolve, reject) => {
        getFileContentCallback((error, data) => {
          resolve([error, data]);
        });
      });

      expect(promise).resolves.toEqual([null, 'Lorem Ipsum']);
    });
  });

  describe('read file async promise', () => {
    it('should read async with promise', () => {
      const result = getFileContentPromise();

      expect(result).resolves.toEqual('Lorem Ipsum');
    });
  });
});

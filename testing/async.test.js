import { describe, it, expect } from 'vitest';
import { doSomethingAsync } from './async.js';

describe('doSomethingAsync', () => {
  it('should return "Hallo Welt"', () => {
    const promise = new Promise((resolve, reject) => {
      doSomethingAsync((error, data) => {
        resolve([error, data]);
      });
    });

    expect(promise).resolves.toEqual([null, 'Hallo Welt']);
  });

  it('should return "Hallo Welt"', () => {
    const promise = new Promise((resolve, reject) => {
      doSomethingAsync((error, data) => {
        resolve(error);
      });
    });

    expect(promise).resolves.toEqual(null);
  });

  it('should return "Hallo Welt"', () => {
    const promise = new Promise((resolve, reject) => {
      doSomethingAsync((error, data) => {
        resolve(data);
      });
    });

    expect(promise).resolves.toEqual('Hallo Welt');
  });

  it('should get an error', () => {
    const promise = new Promise((resolve, reject) => {
      doSomethingAsync((error, data) => {
        resolve([error, data]);
      }, true);
    });

    expect(promise).resolves.toEqual([new Error('whoops'), undefined]);
  });
});

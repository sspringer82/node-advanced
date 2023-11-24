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
});

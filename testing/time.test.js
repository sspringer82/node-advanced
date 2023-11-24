import { it, describe, expect, beforeEach, vi, afterEach } from 'vitest';
import { doSomethingAsync } from './time.js';

describe('time', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return "Hallo Welt"', () => {
    const promise = new Promise((resolve, reject) => {
      doSomethingAsync((error, data) => {
        resolve([error, data]);
      });
    });

    // vi.advanceTimersByTime(1000);
    // vi.advanceTimersToNextTimer();
    vi.runAllTimers();

    expect(promise).resolves.toEqual([null, 'Hallo Welt']);
  });

  it('should fake the date', () => {
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);
    expect(new Date().toString()).toEqual(
      'Tue Feb 01 2000 13:00:00 GMT+0100 (Central European Standard Time)'
    );

    vi.advanceTimersByTime(1000);
    expect(new Date().toString()).toEqual(
      'Tue Feb 01 2000 13:00:01 GMT+0100 (Central European Standard Time)'
    );
  });
});

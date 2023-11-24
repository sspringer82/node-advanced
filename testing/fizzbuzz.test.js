import { describe, it, expect } from 'vitest';

import fizzbuzz from './fizzbuzz.js';

describe('fizzbuzz', () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 'fizz'],
    [4, 4],
    [5, 'buzz'],
    [6, 'fizz'],
    [10, 'buzz'],
    [15, 'fizzbuzz'],
    [30, 'fizzbuzz'],
  ])('fizzbuzz(%i) -> %s', (input, expected) => {
    const result = fizzbuzz(input);
    expect(result).toBe(expected);
  });
});

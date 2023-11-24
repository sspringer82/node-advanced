import {
  expect,
  describe,
  it,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
} from 'vitest';
import Calc from './calc.js';

describe('Calc', () => {
  let calc;

  beforeAll(() => {});
  beforeEach(() => {
    // Arrange
    calc = new Calc();
  });
  afterEach(() => {});
  afterAll(() => {});

  it('should add 1 and 1 and return 2', () => {
    // Act
    const result = calc.add(1, 1);

    // Assert
    expect(result).toBe(2);
  });

  it('should add 2 and 3 and return 5', () => {
    // Act
    const result = calc.add(2, 3);

    // Assert
    expect(result).toBe(5);
  });

  it('should add 1 and 1 and return 2', () => {
    expect(new Calc().add(1, 1)).toBe(2);
  });
});

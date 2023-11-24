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

  describe('.add', () => {
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

  describe('.multi', () => {
    it('should multiply 2 with 3 and return 6', () => {
      const result = calc.multi(2, 3);

      expect(result).toBe(6);
    });

    it('should throw an exception if the first parameter is not a number', () => {
      const testFn = () => calc.multi('1', 2);

      expect(testFn).toThrow();
    });

    it('should throw an exception if the second parameter is not a number', () => {
      const testFn = () => calc.multi(1, '2');

      expect(testFn).toThrow();
    });

    it('should throw an exception if both parameters are not a number', () => {
      const testFn = () => calc.multi('1', '2');

      expect(testFn).toThrow();
    });
  });
});

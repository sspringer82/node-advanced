import { describe, it, expect, vi } from 'vitest';
import doSomething from './spy.js';

describe('doSomething', () => {
  it('should call the callback with "test"', () => {
    doSomething((value) => {
      expect(value).toBe('test');
    });
  });

  it('should call the callback with "test" (spy version)', () => {
    const callback = vi.fn();

    doSomething(callback);

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith('test');
    expect(callback).toHaveBeenCalledOnce();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should work with spies', () => {
    const fn = vi.fn();
    fn.mockReturnValue('Hallo Welt');

    const result = fn();

    expect(result).toBe('Hallo Welt');
  });
});

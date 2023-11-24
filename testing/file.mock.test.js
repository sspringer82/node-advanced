import { describe, it, expect, vi } from 'vitest';
import {
  getFileContent,
  getFileContentCallback,
  getFileContentPromise,
} from './file';

const readFileSyncSpy = vi.fn().mockReturnValue('xxx');
const readFileSpy = vi.fn().mockImplementation((filename, encoding, cb) => {
  cb('xxx22');
});

vi.mock('node:fs', () => {
  return {
    readFile: (...args) => readFileSpy(...args),
    readFileSync: (...args) => readFileSyncSpy(...args),
  };
});

const readFilePromisedSpy = vi.fn().mockResolvedValue('xxx33');
vi.mock('node:fs/promises', () => {
  return {
    readFile: (...args) => readFilePromisedSpy(...args),
  };
});

describe('mocking', () => {
  it('should test getFileContent', () => {
    const result = getFileContent();

    expect(result).toBe('xxx');
    expect(readFileSyncSpy).toHaveBeenCalledWith('input.txt', 'utf-8');
  });

  it('should test getFileContentCallback', () => {
    const cb = vi.fn();

    getFileContentCallback(cb);

    expect(cb).toHaveBeenCalledWith('xxx22');
    expect(readFileSpy).toHaveBeenCalledWith('input.txt', 'utf-8', cb);
  });

  it('should test getFile Content Promise', () => {
    const result = getFileContentPromise();

    expect(result).resolves.toBe('xxx33');
    expect(readFilePromisedSpy).toHaveBeenCalledWith('input.txt', 'utf-8');
  });
});

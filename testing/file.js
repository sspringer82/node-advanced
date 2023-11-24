import { readFile, readFileSync } from 'node:fs';
import { readFile as readFilePromised } from 'node:fs/promises';

export function getFileContent() {
  return readFileSync('input.txt', 'utf-8');
}

export function getFileContentCallback(callback) {
  readFile('input.txt', 'utf-8', callback);
}

export function getFileContentPromise() {
  return readFilePromised('input.txt', 'utf-8');
}

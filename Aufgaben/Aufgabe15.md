# Aufgabe 15 - Mocking

Ersetze mindestens eine der fs-Funktionen aus `file.js` durch einen Mock.

https://vitest.dev/guide/mocking.html#modules

```js
vi.mock('node:fs', () => {
  return {
    readFile: vi.fn(),
    readFileSync: vi.fn(),
  }
})
```
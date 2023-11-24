# Aufgabe 15 - Mocking

Ersetze mindestens eine der fs-Funktionen aus `file.js` durch einen Mock.

https://vitest.dev/guide/mocking.html#modules

```js
vi.mock('./handlers.js', () => {
  return {
    success: vi.fn(),
    failure: vi.fn(),
  }
})
```
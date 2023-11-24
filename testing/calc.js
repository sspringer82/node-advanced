export default class Calc {
  add(a, b) {
    return a + b;
  }

  multi(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('not a number');
    }
    return a * b;
  }
}

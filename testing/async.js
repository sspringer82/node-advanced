export function doSomethingAsync(callback, fail = false) {
  setTimeout(() => {
    if (fail) {
      callback(new Error('whoops'));
    } else {
      callback(null, 'Hallo Welt');
    }
  }, 1000);
}

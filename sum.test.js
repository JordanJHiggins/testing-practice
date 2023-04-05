const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toEqual(3);
});

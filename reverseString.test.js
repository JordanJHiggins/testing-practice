const reverseString = require('./reverseString');

test('properly reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

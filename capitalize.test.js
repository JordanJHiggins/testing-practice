const capitalize = require('./capitalize');

test('fist letter is capitalized', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

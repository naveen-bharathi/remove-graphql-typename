/* eslint-disable max-len */
/* eslint-disable no-undef */
const assert = require('assert');
const removeTypename = require('../index');

const objWithTypename = {
  id: '12345',
  name: 'javascript',
  __typename: 'language',
  books: [
    {
      name: 'Learn JS',
      author: 'Naveen Bharathi',
      __typename: 'book',
    },
    {
      name: 'A guide to TS',
      author: 'Naveen',
      __typename: 'book',
    },
  ],
};
const objWithoutTypename = {
  id: '12345',
  name: 'javascript',
  books: [
    {
      name: 'Learn JS',
      author: 'Naveen Bharathi',
    },
    {
      name: 'A guide to TS',
      author: 'Naveen',
    },
  ],
};

test('Should return an error if the passed parameter is not an object', async () => {
  expect(() => removeTypename('objWithTypename')).toThrow();
});

test('After removing the __typename from objWithTypename, the result should match with objWithoutTypename', async () => {
  expect(() => assert.deepStrictEqual(removeTypename(objWithTypename), objWithoutTypename)).not.toThrow();
});

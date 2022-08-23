const assert = require('assert');
const removeTypename = require('../index');

const languages = {
  __typename: 'language',
  id: '12345',
  name: 'javascript',
  books: [
    {
      __typename: 'book',
      author: 'Naveen Bharathi',
      name: 'Learn JS',
    },
    {
      __typename: 'book',
      author: 'Naveen',
      name: 'A guide to TS',
    },
  ],
};
const languagesFiltered = {
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

test(
  'Should return an error if the passed parameter is not an object',
  async () => {
    expect(() => (
      removeTypename('languages')
    )).toThrow();
  },
);

test(
  `The result object obtained by passing 'languages' to 'removeTypename' 
  should match with 'languagesFiltered'`,
  async () => {
    expect(() => (
      assert.deepStrictEqual(removeTypename(languages), languagesFiltered)
    )).not.toThrow();
  },
);

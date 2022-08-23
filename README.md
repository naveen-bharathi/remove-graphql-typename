![tests](https://github.com/remove-graphql-typename/workflows/tests/badge.svg?event=push) ![License](https://badgen.net/npm/license/@naveen-bharathi%2Fremove-graphql-typename?color=blue) ![GitHub issues](https://img.shields.io/github/issues/remove-graphql-typename) ![weekly downloads](https://badgen.net/npm/dw/@naveen-bharathi%2Fremove-graphql-typename?color=blue&icon=npm) ![dependencies](https://badgen.net/david/dep/remove-graphql-typename?color=green) ![dependents](https://badgen.net/npm/dependents/@naveen-bharathi%2Fremove-graphql-typename?color=green) ![publish size](https://badgen.net/bundlephobia/minzip/remove-graphql-typename?color=blue)


# remove-graphql-typename

Remove **`__typename`** from a GraphqQL response recursively.

## Installation

if you are using npm, run
```
npm install --save remove-graphql-typename
```

or

if you are using yarn package manager, run
```
yarn add remove-graphql-typename
```

## Example

Remove the key **`__typename`** from a GraphQL response.

```javascript
import removeTypename from 'remove-graphql-typename'; // ES6
// or
const removeTypename = require('remove-graphql-typename'); // ES5

const languages = {
  '__typename': 'language',
  'id': '12345',
  'name': 'javascript',
  'books': [
    {
      '__typename': 'book'
      'author': 'Naveen Bharathi',
      'name': 'Learn JS',
    },
    {
      '__typename': 'book'
      'author': 'Naveen',
      'name': 'A guide to TS',
    }
  ]
};

console.log(languages);
/* outputs ==>  
  {
    '__typename': 'language',
    'id': '12345',
    'name': 'javascript',
    'books': [
      {
        '__typename': 'book'
        'author': 'Naveen Bharathi',
        'name': 'Learn JS',
      },
      {
        '__typename': 'book'
        'author': 'Naveen',
        'name': 'A guide to TS',
      }
    ]
  }
*/

const languagesFiltered = removeTypename(languages);

console.log(languagesFiltered);
/* outputs ==>  
  {
    'id': '12345',
    'name': 'javascript',
    'books': [
      {
        'author': 'Naveen Bharathi',
        'name': 'Learn JS',
      },
      {
        'author': 'Naveen',
        'name': 'A guide to TS',
      }
    ]
  }
*/
```

## Parameters

#### removeTypename(obj)
- **obj** **{Object | Array}** - object you want to remove the __typename(s) from.


## Tests

![tests](https://github.com/remove-graphql-typename/workflows/tests/badge.svg?event=push)


## Open Issues

![GitHub issues](https://img.shields.io/github/issues/remove-graphql-typename)


## LICENSE

MIT License

Copyright (c) 2022 Naveen Bharathi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

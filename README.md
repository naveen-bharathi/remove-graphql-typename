![tests](https://github.com/naveen-bharathi/remove-graphql-typename/workflows/tests/badge.svg?event=push) ![License](https://badgen.net/npm/license/@naveen-bharathi%2Fremove-graphql-typename?color=blue) ![GitHub issues](https://img.shields.io/github/issues/naveen-bharathi/remove-graphql-typename)

![weekly downloads](https://badgen.net/npm/dw/@naveen-bharathi%2Fremove-graphql-typename?color=blue&icon=npm) ![dependencies](https://badgen.net/david/dep/naveen-bharathi/remove-graphql-typename?color=green) ![dependents](https://badgen.net/npm/dependents/@naveen-bharathi%2Fremove-graphql-typename?color=green) ![publish size](https://badgen.net/bundlephobia/minzip/@naveen-bharathi/remove-graphql-typename?color=blue)


# remove-graphql-typename

Remove **`__typename`** from a GraphqQL response recursively.

## Installation

if you are using npm, run
```
npm install --save @naveen-bharathi/remove-graphql-typename
```

or

if you are using yarn package manager, run
```
yarn add @naveen-bharathi/remove-graphql-typename
```

## Example

Remove the key **`__typename`** from a GraphQL response.

```javascript
import removeTypename from '@naveen-bharathi/remove-graphql-typename'; // ES6
// or
const removeTypename = require('@naveen-bharathi/remove-graphql-typename'); // ES5

const objectWithTypename = {
  'id': '12345',
  'name': 'javascript',
  '__typename': 'language',
  'books': [
    {
      'name': 'Learn JS',
      'author': 'Naveen Bharathi',
      '__typename': 'book'
    },
    {
      'name': 'A guide to TS',
      'author': 'Naveen',
      '__typename': 'book'
    }
  ]
};

console.log(objectWithTypename);
/* outputs ==>  
  {
    'id': '12345',
    'name': 'javascript',
    '__typename': 'language',
    'books': [
      {
        'name': 'Learn JS',
        'author': 'Naveen Bharathi',
        '__typename': 'book'
      },
      {
        'name': 'A guide to TS',
        'author': 'Naveen',
        '__typename': 'book'
      }
    ]
  }
*/

const objectWithoutTypename = removeTypename(objectWithTypename);

console.log(objectWithoutTypename);
/* outputs ==>  
  {
    'id': '12345',
    'name': 'javascript',
    'books': [
      {
        'name': 'Learn JS',
        'author': 'Naveen Bharathi',
      },
      {
        'name': 'A guide to TS',
        'author': 'Naveen',
      }
    ]
  }
*/
```

## Parameters

#### removeTypename(obj)
- **obj** **{Object | Array}** - object you want to remove the __typename(s) from.


## Tests

![tests](https://github.com/naveen-bharathi/remove-graphql-typename/workflows/tests/badge.svg?event=push)


## Open Issues

![GitHub issues](https://img.shields.io/github/issues/naveen-bharathi/remove-graphql-typename)


## LICENSE

MIT License

Copyright (c) 2020 Naveen Bharathi

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

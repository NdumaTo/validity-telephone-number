# Phone Number Validator

A validity style validator for ensuring phone numbers are entered correctly. Built on the functionality of [awesome-phonenumber](https://www.npmjs.com/package/awesome-phonenumber)

## Installation

```npm install validity-telephone-number --save```

```yarn add validity-telephone-number```

## Usage

Below is example usage of the telephone number validator:

```javascript
const phoneNumber = require('validity-telephone-number'),
schemata = require('schemata')

var schema = schemata (
  {
    telephone:
    {
      type: String
      , validators: { [ phoneNumber ] }
    }
  }
)
```
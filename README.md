# querify
node.js "querybuilder" for when knex/squel aren't performant enough

## Example

```
var querify = require('querify');

var sql = `SELECT FIELD from TABLE WHERE STRING_COLUMN = {stringValue} AND INTEGER_COLUMN = {integerValue} AND ARRAY_COLUMN IN ({arrayValue})`;

var parameters = {
  stringValue: '123',
  integerValue: 123,
  arrayValue: ['1', 2, 3]
};

> console.log(querify(sql, parameters));
SELECT FIELD from TABLE WHERE STRING_COLUMN = '123' AND INTEGER_COLUMN = 123 AND ARRAY_COLUMN IN ('1', 2, 3)
```

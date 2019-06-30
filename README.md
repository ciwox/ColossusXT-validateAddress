# ColossusXT-validateAddress
Address Validation by base58

# altcoin-address
Functions for working with altcoin addresses, forked from [ryanralph](https://github.com/ryanralph/altcoin-address/).

## API

### validate (address [, type])

> returns true if the address (string) is a valid altcoin address for the type specified
>
> if no options are specified it defaults to bitcoin

### get_address_type (address)

> returns address type if valid base58 address, otherwise null

### Address types

* ColossusXT/COLX  (bitcoin)

### Example

```javascript
var altcoin = require('./index.js');
var valid = altcoin.validate('DSesymccyAQr6LjGLCHsvHzE41uKMk86XS', 'colossusxt');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

//This should return that 'This is a valid address'
```

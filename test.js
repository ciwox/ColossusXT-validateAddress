var altcoin = require('./index.js');

var valid = altcoin.validate('DSesymccyAQr6LjGLCHsvHzE41uKMk86XS', 'colossusxt');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');
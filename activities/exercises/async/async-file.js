const fs = require('fs');

fs.readFile('./hello', function(er, data) {
	console.log(data.toString());
});

console.log('Second call');

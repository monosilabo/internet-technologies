const net = require('net');
const fs = require('fs');

const args = process.argv.splice(2);
let host;
let port;
let msg = '';
let path = '';
let client;

if (!args[0]) {
	error('host required.');
}
if (!args[1]) {
	error('port required.');
}
if (!args[2]) {
	error('path required.');
}

host = args[0];
port = args[1];
path = args[2];

client = net.connect({port, host}, () => {
	// 'connect' event listener
	console.log(`${new Date()} connected to server`);

	fs.readFile(path, (err, data) => {
		if (err) throw err;
		// console.log(data);

		// The callback parameter will be executed when the data is finally written out - this may not be immediately.
		client.write(data, () => {
			client.end();
		});
	});
});

client.on('data', (data) => {
	console.log(data.toString());
});
client.on('end', (data) => {
	console.log('disconnected from server');
});

function error(msg) {
	console.error(msg);
	process.exit(1);
}

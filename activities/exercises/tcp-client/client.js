const net = require('net');

const args = process.argv.splice(2);
let host;
let port;
let msg = '';
let client;

if (!args[0]) {
	error('host required.');
}
if (!args[1]) {
	error('port required.');
}

host = args[0];
port = args[1];
msg = args[2] || `Hello server, I'm mono!`;

client = net.connect({port, host}, () => {
	// 'connect' event listener
	console.log(`${new Date()} connected to server`);

	client.write(msg);
});

client.on('data', (data) => {
	console.log(data.toString());
	client.end();
});
client.on('end', (data) => {
	console.log('disconnected from server');
});

function error(msg) {
	console.error(msg);
	process.exit(1);
}

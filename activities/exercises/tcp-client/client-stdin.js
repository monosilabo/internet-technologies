const net = require('net');

const args = process.argv.splice(2);
let host;
let port;
let msg = '';

if (!args[0]) {
	error('host required.');
}
if (!args[1]) {
	error('port required.');
}

host = args[0];
port = args[1];

process.stdin.setEncoding('utf8');

// Read message from stdin
process.stdin.on('readable', function() {
	let chunk = process.stdin.read();

	if (chunk !== null) {
		msg += chunk;
		process.stdout.write('stdin: ' + chunk);
	}
});
process.stdin.on('end', function() {
	process.stdout.write(msg);
	process.stdout.write('stdin: <end>');
	send(port, host, msg);
});

// Send message
function send(port, host, msg) {
	let client = net.connect({port, host}, () => {
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
}

// Error handler
function error(msg) {
	console.error(msg);
	process.exit(1);
}

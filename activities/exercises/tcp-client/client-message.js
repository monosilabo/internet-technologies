const net = require('net');

const PORT = 8124;

const client = net.createConnection({ port: PORT}, () => {
	// 'connect' listener
	console.log('connected to server');

	client.write('Hello server');
});

client.on('data', (data) => {
	console.log(data.toString());
	client.end();
});
client.on('end', () => {
	console.log('disconnected from server');
});

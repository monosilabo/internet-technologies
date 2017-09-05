const net = require('net');

const PORT = 8124;

const server = net.createServer();
server.on('error', (err) => {
	throw err;
});
server.on('connection', (c) => {
	// 'connection' listener
	console.log('client connected');

	c.on('end', () => {
		console.log('client disconnected');
	});
	c.on('data', (data) => {
		c.write('> ' + data.toString())
	});

	c.write('> Hello client\r\n');
});
server.listen(PORT, () => {
	console.log(`server bound to port ${PORT}`);
});

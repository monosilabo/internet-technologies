const net = require('net');

const PORT = 8124;

const server = net.createServer((c) => {
	// 'connection' listener
	console.log('client connected');

	c.on('end', () => {
		console.log('client disconnected');
	});
	c.write('Hello client\r\n');
	c.pipe(c);
});
server.on('error', (err) => {
	throw err;
});
server.listen(PORT, () => {
	console.log(`server bound to port ${PORT}`);
});
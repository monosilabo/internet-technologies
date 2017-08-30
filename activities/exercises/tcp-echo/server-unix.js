const net = require('net');

const server = net.createServer((c) => {
	// 'connection' listener
	console.log('client connected');

	c.on('end', () => {
		console.log('client disconnected');
	});
	c.write('hello\r\n');
	c.pipe(c);
});
server.on('error', (err) => {
	throw err;
});
// Listen on a Unix Domain Socket
server.listen('/tmp/echo2.sock', () => {
	console.log('server bound');
});
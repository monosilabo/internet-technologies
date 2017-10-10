const net = require('net');

const port = 8124;
const key = `I'm super secret!`;
const server = net.createServer();
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', key);

server.on('error', (err) => {
	throw err;
});
server.on('connection', (c) => {
	// 'connection' listener
	console.log('client connected');

	// Events
	c.on('data', (data) => {
		let encrypted = data.toString();
		let decrypted = '';

		console.log(encrypted);

		// Decrypt data
		decipher.on('readable', () => {
		  const data = decipher.read();
		  if (data)
			decrypted += data.toString('utf8');
		});
		decipher.on('end', () => {
		  console.log(decrypted);
		});
		decipher.write(encrypted, 'hex');
		decipher.end();
	});
	c.on('end', () => {
		console.log('client disconnected');
	});
});
server.listen(port, () => {
	console.log(`server bound to port ${port}`);
});

const net = require('net');
const fs = require('fs');
const crypto = require('crypto');

const args = process.argv.splice(2);
const host = '127.0.0.1';
const port = 8124;
const path = `${__dirname}/files/secret-file.txt`;;
const key = `I'm super secret!`;
const cipher = crypto.createCipher('aes192', key);

const socket = net.connect({port, host}, () => {
	// 'connect' event listener
	console.log(`connected to Rainer`);

	// Read file
	fs.readFile(path, (err, data) => {
		if (err) throw err;

		// Encrypt data
		let encrypted = '';
		cipher.on('readable', () => {
			const data = cipher.read();
			if (data)
				encrypted += data.toString('hex');
		});
		cipher.on('end', () => {
			console.log(encrypted);

			// Send encrypted content
			// The callback parameter will be executed when the data is finally written out - this may not be immediately.
			socket.write(encrypted, () => {
				socket.end();
			});
		});

		cipher.write(data);
		cipher.end();
	});
});

socket.on('data', (data) => {
	console.log(data.toString());
});
socket.on('end', (data) => {
	console.log('disconnected from Rainer');
});

function error(msg) {
	console.error(msg);
	process.exit(1);
}

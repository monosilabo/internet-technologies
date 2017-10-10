// openssl genrsa -out server-key.pem 2048
// openssl req -new -sha256 -key server-key.pem -out server-csr.pem
// openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem
// openssl s_client -connect 127.0.0.1:8000 # Open a connection to the server
const tls = require('tls');
const fs = require('fs');
const crypto = require('crypto');

const port = 8000;
const options = {
	key: fs.readFileSync(__dirname + '/server-key.pem'),
	cert: fs.readFileSync(__dirname + '/server-cert.pem')
};
const users = {
	'mono': 'f4ec2882b830fe9e66ef6964e73c4eb6f20b56efb2cee78d8e63d4a5c21417c7'
};

// Create TLS server
const server = tls.createServer(options, (socket) => {
	console.log('server connected', socket.authorized ? 'authorized' : 'unauthorized');

	// Send welcome message
	socket.write('Token server\n');
	socket.setEncoding('utf8');

	// Read data
	socket.on('data', (data) => {
		const tokenHash = crypto.createHash('sha256');
		const passHash = crypto.createHash('sha256');
		let credentials = JSON.parse(data);
		let response = {};
		let token = '';


		// Check credentials
		if (credentials.username && users[credentials.username]) {
			passHash.update(credentials.password);

			if (users[credentials.username] == passHash.digest('hex')) {
				tokenHash.update(Math.random().toString());
				token = tokenHash.digest('hex');
				response.token = token;
			} else {
				response.error = 'Unauthorized';
			}
		} else {
			response.error = 'Unauthorized';
		}

		// Send response
		socket.write(JSON.stringify(response), () => {
			socket.end();
		});
	});
});
server.listen(port, () => {
	console.log(`server bound to port ${port}`);
});

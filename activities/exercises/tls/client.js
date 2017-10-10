const tls = require('tls');
const fs = require('fs');

const port = 8000;
const options = {
	ca: [fs.readFileSync(__dirname + '/server-cert.pem')]
};
let credentials = {
	username: 'mono',
	password: 'monkeybusinesss'
};

// Connect to TLS server
const socket = tls.connect(port, options, () => {
	console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');

	socket.write(JSON.stringify(credentials));
});
socket.setEncoding('utf8');

// Listeners
socket.on('data', (data) => {
	console.log(data);
});
socket.on('end', () => {
	console.log('connection closed by peer');
});

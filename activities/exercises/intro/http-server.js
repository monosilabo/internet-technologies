// curl -i http://127.0.0.1:8080
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res)  => {
	console.log(req.headers);
	console.log(req.url);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello mono!\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});

const crypto = require('crypto');
const fs = require('fs');

const digest = '0d9027289ffa5d9f6c8b4e0782bb31bbff2cef5ee3708ccbcb7a22df9128bb21';
const filePath = `${__dirname}/files/jquery-3.2.1.js`;
const hash = crypto.createHash('sha256');

hash.on('readable', () => {
	const data = hash.read();

	if (data) {
		let fileDigest = data.toString('hex');

		if (fileDigest == digest) {
			console.log(`Digests match`);
		} else {
			console.log(`Forged file!`);
		}
	}
});

const input = fs.createReadStream(filePath);
input.pipe(hash);

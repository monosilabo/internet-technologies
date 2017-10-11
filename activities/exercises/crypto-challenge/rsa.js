/*
# Private keys are normally already stored in a PEM
# ssh-keygen can be used to convert public keys from SSH formats in to PEM formats suitable for OpenSSL

for k in alan ricardo; do
	echo "Generating $k keys"

	ssh-keygen -t rsa -b 4096 -N '' -C "$k@monkeyland.com" -f ./"$k"
	ssh-keygen -f ./"$k.pub" -e -m pem > "$k.pub.pem"
done;
*/
const crypto = require('crypto');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

let message = 'Hello mono!'
let encrypted;

readFile(`${__dirname}/alan/alan.pub.pem`).then((publicKey) => {
	encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message, 'utf8'));

	console.log('message:', message);
	console.log('encrypted:', encrypted);

	return readFile(`${__dirname}/alan/alan`);
}).then((privateKey) => {
	let decrypted = crypto.privateDecrypt(privateKey, encrypted);

	console.log('decrypted:', decrypted.toString());
}).catch((error) => {
	console.log(error);
});

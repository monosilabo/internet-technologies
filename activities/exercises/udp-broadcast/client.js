#!/usr/bin/env node
const dgram = require('dgram');

const PORT = 41234;

const client = dgram.createSocket('udp4');

client.on('listening', () => {
    const address = client.address();
    console.log(`client listening ${address.address}:${address.port}`);
    client.setBroadcast(true);
});

client.on('message', (msg, rinfo) => {
    console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

client.bind(PORT);

#!/usr/bin/env node
const dgram = require('dgram');

const PORT = 41234;
const BROADCAST_ADDR = '10.0.0.255';
const Messages = [
    'Trump is dragging us toward a full-blown crisis. Here’s what has to happen now.',
    'So far, so good. But this is just the beginning of Hurricane Harvey for Trump.',
    "'Game of Thrones,' Season 7, Episode 7: 'The Dragon and the Wolf'",
    "ACLU challenges Trump administration's transgender military ban",
    'Uber CEO pick has an influential network of relatives across Silicon Valley'
];

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(PORT, () => {
    server.setBroadcast(true);
    setInterval(broadcastMessage, 1000);
});

function broadcastMessage() {
    let rand = Math.floor(Math.random() * Messages.length);
    let message = Messages[rand];

    server.send(message, PORT, BROADCAST_ADDR, () => console.log(`Sent "${message}"`));
}
// server listening 0.0.0.0:PORT

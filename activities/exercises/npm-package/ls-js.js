#!/usr/bin/env node
// npm i glob
// See https://github.com/isaacs/node-glob
const glob = require('glob');

glob(__dirname + '/**/*.js', (er, files) => {
    console.log(files);
});

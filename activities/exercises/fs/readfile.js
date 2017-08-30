// https://nodejs.org/api/fs.html
const fs = require('fs');

fs.readFile(`${__dirname}/hello`, (err, data) => {
    if (err) throw err;

    process.stdout.write(data.toString());
});

const fs = require('fs');
const read = (fileName) => new Promise((resolve,reject)=>{
    fs.readFile(fileName, (err, data) => {
        if (err) return reject(err);
        resolve(data.toString('utf8'));
    });
});

module.exports = read;

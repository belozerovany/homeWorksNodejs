const read = require('./read');

async function getRead() {
    let text;
    try{
        let r = await read('name.txt');
        text = r;
    } catch (err){
        text = err;
    }
   console.log(text);
}

getRead();

//or use then and catch

// read('name.txt')
// .then(console.log)
// .catch(console.log);

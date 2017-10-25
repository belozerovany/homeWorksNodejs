const fs = require("fs");

fs.mkdir('test',function(err){
    let data = new Date();
   if (err) throw err;
   fs.writeFile("./test/file.txt", new Date(), function(err){
    if(err)throw err;
  });
});
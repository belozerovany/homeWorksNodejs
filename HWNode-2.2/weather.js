const fs = require("fs");
const http = require("http");
let result = '';

http.get('http://wttr.in/~kharkov', (res) => {
   if (res.statusCode !== 200) throw new Error(res.statusMessage);
   res.setEncoding('utf-8');
   res.on('data',data =>  result += data);
   res.on('end',() =>{
    fs.writeFile("weather.html", result, function(err){
        if(err)throw err;
    });
   });
});


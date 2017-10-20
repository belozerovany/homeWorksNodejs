const getDate = () =>{
	let data = new Date();
	let string = process.argv[1];
	let name = string.split('\\');
	let information = `${data.getHours()}:${data.getMinutes()} Today: ${data.getDate()} ${data.getMonth()+1} ${data.getFullYear()} ${name[name.length -1]}`;
	
	return information;
};
/*const data = require('timeNow');*/

console.log(getDate() );

/*
module.exports = getDate;*/

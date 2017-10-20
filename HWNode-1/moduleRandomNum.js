function getRandomArbitrary(min, max) {
	let num = Math.random() * (max - min) + min;
	num = Math.floor(num);
	return num;
}
module.exports = getRandomArbitrary;
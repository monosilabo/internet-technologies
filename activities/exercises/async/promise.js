function asyncNum(num, ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num);
		}, ms);
	});
}

console.log('1');
asyncNum(2, 1000).then((num) => {
	let nextNum = num + 1;
	console.log(num);

	// Returns a value
	return nextNum;
}).then((num) => {
	let nextNum = num + 1;

	console.log(num);

	// Returns a promise
	return asyncNum(nextNum, 1000);
}).then((num) => {
	console.log(num);
}).catch((error) => {
	console.log(error);
});

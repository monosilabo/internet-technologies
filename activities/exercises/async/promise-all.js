function asyncNum(num, ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num);
		}, ms);
	});
}

Promise.all([asyncNum(10, 500), asyncNum(20, 1000)]).then((results) => {
	var sum = 0;

	results.forEach((value) => {
		sum += value;
	});

	console.log(sum);
});

function twoSum(array, sum) {
	let pairs = [],
		hashtable = [];

	for (i = 0; i < array.length; i++) {
		let currNum = array[i];
		let counterPart = sum - currNum;

		if (hashtable.indexOf(counterPart) !== -1) {
			pairs.push([currNum, counterPart]);
		}
		hashtable.push(currNum);
	}

	return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([40, 11, 19, 17, -12], 28));

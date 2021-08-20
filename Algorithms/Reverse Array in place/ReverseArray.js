function reverseArrayInPlace(array) {
	for (i = 0; i < array.length / 2; i++) {
		let tempVar = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = tempVar;
	}

	return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));

function mergeSort(array) {
	if (array.length < 2) {
		return array;
	}
	let middleIndex = Math.floor(array.length / 2);
	let firstHalf = array.slice(0, middleIndex);
	let secondHalf = array.slice(middleIndex);

	return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
	let result = [];

	while (array1.length && array2.length) {
		let minElement;
		if (array1[0] < array2[0]) {
			minElement = array1.shift();
		} else {
			minElement = array2.shift();
		}
		result.push(minElement);
	}

	if (array1.length) {
		result = result.concat(array1);
	} else if (array2.length) {
		result = result.concat(array2);
	}

	return result;
}

console.log(mergeSort([8, 5, 4, 3, 1, 2, 9, 6, 7, 2]));

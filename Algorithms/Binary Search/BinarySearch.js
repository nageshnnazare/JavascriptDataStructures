function binarySearch(array, key) {
	let middleIndex = Math.floor(array.length / 2);
	let middleElement = array[middleIndex];

	if (middleElement === key) {
		return true;
	} else if (middleElement < key && array.length > 1) {
		return binarySearch(array.splice(middleIndex, array.length), key);
	} else if (middleElement > key && array.length > 1) {
		return binarySearch(array.splice(0, middleIndex), key);
	} else {
		return false;
	}
}

console.log(binarySearch([5, 7, 12, 16, 36, 42, 56, 71], 56));
console.log(binarySearch([5, 7, 12, 16, 36, 42, 56, 71], 50));

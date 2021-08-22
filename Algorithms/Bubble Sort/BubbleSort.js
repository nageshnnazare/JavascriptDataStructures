function bubbleSort(array) {
	for (i = array.length; i > 0; i--) {
		for (j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

console.log(bubbleSort([8, 5, 4, 3, 1, 2, 9, 6, 7, 2]));

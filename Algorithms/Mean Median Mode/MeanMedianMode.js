function getMean(array) {
	let sum = 0;

	array.forEach((num) => {
		sum += num;
	});

	return sum / array.length;
}

function getMedian(array) {
	array.sort((a, b) => a - b);
	let median;

	if (array.length % 2 !== 0) {
		median = array[Math.floor(array.length / 2)];
	} else {
		let mid1 = array[array.length / 2 - 1],
			mid2 = array[array.length / 2];
		median = (mid1 + mid2) / 2;
	}

	return median;
}

function getMode(array) {
	let modeObj = {};

	array.forEach((num) => {
		if (!modeObj[num]) {
			modeObj[num] = 0;
		}
		modeObj[num]++;
	});

	let maxFreq = 0,
		modes = [];
	for (num in modeObj) {
		if (modeObj[num] > maxFreq) {
			modes = [num];
			maxFreq = modeObj[num];
		} else if (modeObj[num] === maxFreq) {
			modes.push(num);
		}
	}

	if (modes.length === Object.keys(modeObj).length) {
		modes = [];
	}

	return modes;
}

function meanMedianMode(array) {
	return {
		mean: getMean(array),
		median: getMedian(array),
		mode: getMode(array),
	};
}

console.log(meanMedianMode([1, 2, 3, 3, 5, 6]));

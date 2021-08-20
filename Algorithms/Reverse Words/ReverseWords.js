function reverseString(str) {
	let wordsArr = str.split(' ');
	let reversedWordsArr = [];

	wordsArr.forEach((word) => {
		let reversedWord = '';
		for (i = word.length - 1; i >= 0; i--) {
			reversedWord += word[i];
		}
		reversedWordsArr.push(reversedWord);
	});

	return reversedWordsArr.join(' ');
}

console.log(reverseString('javascript is fun'));

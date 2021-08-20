function caesarCipher(str, num) {
	let lowerCaseStr = str.toLowerCase();
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let newStr = '';

	num = num % alphabet.length;

	for (i = 0; i < lowerCaseStr.length; i++) {
		let currLetter = lowerCaseStr[i];
		if (currLetter === ' ') {
			newStr += currLetter;
			continue;
		}

		let currIndex = alphabet.indexOf(currLetter);
		let newIndex = currIndex + num;

		if (newIndex > 25) {
			newIndex = newIndex - alphabet.length;
		}
		if (newIndex < 0) {
			newIndex = alphabet.length + newIndex;
		}

		if (str[i] === str[i].toUpperCase()) {
			newStr += alphabet[newIndex].toUpperCase();
		} else {
			newStr += alphabet[newIndex];
		}
	}
	return newStr;
}

console.log(caesarCipher('zoo keeper', 2));
console.log(caesarCipher('zoo ', -1));
console.log(caesarCipher('javascript ', -200));

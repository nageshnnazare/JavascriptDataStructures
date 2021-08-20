function isPalindrome(string) {
	string = string.toLowerCase();
	let charArr = string.split('');
	let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let lettersArr = [];

	charArr.forEach((char) => {
		if (validChars.indexOf(char) > -1) {
			lettersArr.push(char);
		}
	});

	if (lettersArr.join('') === lettersArr.reverse().join('')) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('coding javascript'));

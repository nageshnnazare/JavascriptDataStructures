function fizzBuzz(num) {
	let answer = [];
	for (i = 1; i <= num; i++) {
		if (!(i % 3) && !(i % 5)) {
			answer.push('Fizz Buzz');
		} else {
			if (!(i % 3)) {
				answer.push('Fizz');
			} else if (!(i % 5)) {
				answer.push('Buzz');
			} else {
				answer.push(i);
			}
		}
	}
	return answer;
}

console.log(fizzBuzz(20));

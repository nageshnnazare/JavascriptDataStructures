function seiveOfEratosthenes(num) {
	let primes = [];
	for (i = 0; i <= num; i++) {
		primes.push(true);
	}
	primes[0] = false;
	primes[1] = false;

	for (i = 2; i <= Math.sqrt(num); i++) {
		for (j = 2; j * i <= num; j++) {
			primes[i * j] = false;
		}
	}

	let result = [];
	for (i = 0; i < primes.length; i++) {
		if (primes[i]) {
			result.push(i);
		}
	}

	return result;
}

console.log(seiveOfEratosthenes(50));

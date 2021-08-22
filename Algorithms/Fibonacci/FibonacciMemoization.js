function fibonacciMemoization(index, cache) {
	cache = cache || [];
	if (cache[index]) {
		return cache[index];
	} else {
		if (index < 3) {
			return 1;
		} else {
			cache[index] = fibonacciMemoization(index - 1, cache) + fibonacciMemoization(index - 2, cache);
			return cache[index];
		}
	}
}

console.log(fibonacciMemoization(50));

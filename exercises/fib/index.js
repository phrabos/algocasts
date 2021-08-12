// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const cache = {};

function fib(n) {
	if (n < 2) return n;
	if (cache[n]) return cache[n];
	if (!cache[n]) {
		const result = fib(n - 1) + fib(n - 2);
		cache[n] = result;
		return result;
	}

	// return fib(n - 1) + fib(n - 2);
}

// function fib(n) {
// 	let x = 0;
// 	let y = 1;
// 	let res;
// 	// let seq = n;

// 	if (n < 2) return n;
// 	while (n > 1) {
// 		res = x + y;
// 		x = y;
// 		y = res;
// 		n--;
// 	}
// 	return res;
// }

module.exports = fib;

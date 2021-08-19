// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function slowFib(n) {
    // Exponential runtime
    // For every increase in n, we're going to get a dramatic increase in calls
    if (n<2) {
        return n;
    }

    return fib(n-1) + fib(n-2);

}

const fib = memoize(slowFib)

module.exports = fib;

// function fib(n) {
//     // Exponential runtime
//     // For every increase in n, we're going to get a dramatic increase in calls
//     if (n<2) {
//         return n;
//     }

//     return fib(n-1) + fib(n-2);

// }

// function fib(n) {

//     // For every increase in n, we have to calculate one extra number
//     // Linear runtime
//     const arr=[];

//     for (let i=0; i<=n; i++) {
//         if (i-2 < 0) {
//             arr.push(i)
//         } else {
//             arr.push(arr[i-1] + arr[i-2])
//         }
//     }
//     return arr[n]
// }
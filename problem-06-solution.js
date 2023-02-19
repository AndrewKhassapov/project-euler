/*
Sum square difference:

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
2035 - 385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 6 solution:

    const max = 100;

    function sumOfSquares(numbers) {
        // Sum of squares = (n * n-1 * (2n-1)/6
        return (numbers * (numbers + 1) * ((2 * numbers) + 1)) / 6;
    }

    function squareOfSums(numbers) {
        // Square of sums = sq(n * (n+1)/2)
        return Math.pow(0.5 * (numbers * (numbers + 1)), 2);
    }

    console.log(squareOfSums(max) - sumOfSquares(max));

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
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
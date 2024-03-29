/*
Multiples of 3 and 5:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 1 solution:
    const limit = 1000;
    let sum = 0;
    for (i = 0; i < limit; i++) {
        if (((i % 3) == 0) || ((i % 5) == 0)) {
            sum += i;
        }
    }

    console.log(sum);

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
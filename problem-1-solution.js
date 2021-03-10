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
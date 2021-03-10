//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 2 solution:
    let num1 = 1;
    let num2 = 2;
    let num;
    const limit = 4000000;

    let sum = num2;

    while ((num1 + num2) < limit) {
        num = num1 + num2;
        if ((num % 2) == 0) {
            sum += num;
        }
        num1 = num2;
        num2 = num;
    }

    console.log(sum);

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
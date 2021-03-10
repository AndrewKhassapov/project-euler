//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 5 solution:

    const maxFactor = 20; //Largest factor to divide by.

    function getSmallestNumber() {
        let number = 1;
        let divisible = false;

        do {
            for (let i = maxFactor; i > 0; i--) {
                if (i == 1) {
                    divisible = true;
                    break;
                } else if ((number % i) != 0) {
                    number++;
                    break;
                }
            }
        }
        while (!divisible);

        return number;
    }

    console.log(getSmallestNumber());

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
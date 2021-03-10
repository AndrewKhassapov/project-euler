//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 7 solution:

    const NUMBER_OF_PRIMES = 10001;

    function getPrimes(count) {
        let num = 3;
        let primes = [];
        primes.push(2);

        do {
            let cap = Math.ceil(Math.sqrt(num)); //All factors above the square root have smaller factors.
            for (let i = 2; i <= cap + 1; i++) {
                if (i > cap) {
                    primes.push(num); //Prime number.
                    num += 2;
                }

                if ((num % i) == 0) { //Not a prime number because it has factors.
                    num += 2;
                    break;
                }
            }

        }
        while (primes.length < count)

        return primes;
    }

    function getLastValue(arr) {
        return arr[arr.length - 1];
    }

    console.log(getPrimes(NUMBER_OF_PRIMES));
    console.log(getLastValue(getPrimes(NUMBER_OF_PRIMES)));

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
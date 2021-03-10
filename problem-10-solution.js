/*
Summation of primes:

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 10 solution:

    let primes = [];
    const limit = 2000000;

    const isPrime = function (number) {
        if (number % 2 == 0) { return false; } //Double-check for even numbers.

        let checkNum = Math.sqrt(number); //All factors above square root have smaller factors.
        for (let j = 3; j <= checkNum; j += 2) {
            if (number % j == 0) {
                return false;
            }
        }
        return true;
    }

    const findPrimes = function () {
        primes = [2];
        for (let i = 3; i < limit; i += 2) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
    }

    const sumAllPrimes = function () {
        let sum = 0;
        primes.forEach(function (num) {
            sum += num;
        })
        return sum;
    }

    findPrimes();
    console.log(primes, sumAllPrimes());

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
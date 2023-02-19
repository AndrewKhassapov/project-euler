/*
Largest prime factor:

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 3 solution:

    const numberToCheck = 600851475143;
    const showAllFactors = false; //Set to true to log all factors.

    function getLargestPrimeFactor(number) {
        factors = getAllFactors(number);

        for (let i = factors.length - 1; i > 0; i--) {
            let factorsOfFactors = getAllFactors(factors[i]);

            if (factorsOfFactors.length <= 2) {
                //The only factors are 1 and the factor.
                return factors[i];
            }
        }

        return 1;
    }


    function getAllFactors(number) {
        let lowFactors = [];
        let factors = [];

        //Compare only factors up to the square root.
        //Factors above the square root have smaller multiple factors.
        let checkNum = Math.ceil(Math.sqrt(number));

        for (let i = 1; i < checkNum; i++) {
            if ((i > lowFactors[lowFactors.length - 1]) || (lowFactors.length == 0)) {
                if ((number % i) == 0) {
                    //Add factors.
                    lowFactors.push(i);
                }
            }
        }

        for (let i = 0; i < lowFactors.length; i++) {
            factors.push(number / lowFactors[i]);
        }

        return lowFactors.concat(factors);
    }

    if (showAllFactors) { console.log(getAllFactors(numberToCheck)); } //Returns an array of all factors.
    console.log(getLargestPrimeFactor(numberToCheck));

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
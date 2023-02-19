/*
Largest palindrome product:

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 4 solution:

    const max = 999;
    const min = 100;

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    function getLargestPalindrome() {
        let str = "";
        let largestPalindrome = 0;
        let loopMin = min;

        for (let i = max; i > loopMin; i--) {
            for (let j = i; j > loopMin; j--) {
                var product = i * j;
                str = product.toString();
                if ((str == reverseString(str)) && product > largestPalindrome) {
                    largestPalindrome = product;
                    if (j > min) {
                        loopMin = j;
                    }
                    break;
                }
            }
        }
        return largestPalindrome;
    }

    console.log(getLargestPalindrome());

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
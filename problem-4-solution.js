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
//Wrapper method used to measure performance.
let t0 = performance.now();
function main() {
    //Start wrapper.

    //Problem 9 solution:

    const max = 1000;
    const maxLimit = max / 2; // Given natural numbers a + b + c = x, a < b < c, a and b cannot exceed x/2.
    let a, b;
    const c = function () { return max - a - b; };

    const findPythagoreanTriplet = function () {
        for (a = 1; a < maxLimit; a++) {
            for (b = a + 1; b < maxLimit; b++) {
                if ((a * a) + (b * b) == c() * c()) {
                    return [a, b, c()];
                }
            }
        }
    }

    const product = function () {
        return a * b * c();
    }

    console.log(findPythagoreanTriplet(), product());

    //End wrapper.
}
main();

let t1 = performance.now();
console.log((t1 - t0) + " milliseconds.");
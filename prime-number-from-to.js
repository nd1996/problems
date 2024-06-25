/**
 * Generates an array of prime numbers up to a given number.
 * 
 * @param {number} from - The lower limit of the prime numbers.
 * @param {number} to - The upper limit of the prime numbers.
 * @return {Array} An array of prime numbers.
 */
const primeNumber = (from, to) => {
    // Decide the starting number based on the input
    let i = from > 11 ? (from % 2 === 0 ? from + 1 : from) : 11;

    // Initialize primeNo array with known prime numbers with single digit
    let primeNo = i === 11 ? [2, 3, 5, 7] : [];

    /**
     * Iterate through the rest of the numbers starting with 8 
     * with an increment of 2 (to exclude even numbers).
     */
    for (i; i <= to; i += 2) {
        let isPrime = true; // Assume the number is prime

        /**
         * Iterate from 3 to the current number.
         * If the number is divisible by any number in the range, 
         * it is not prime and the loop breaks.
         */
        for (let j = 3; j < i; j += 2) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // If the number is prime, add it to the primeNo array
        if (isPrime) {
            primeNo.push(i);
        }
    }

    return primeNo;
}

// Test Cases
console.log(primeNumber(1, 50));

// Test Cases
console.log(primeNumber(50, 100));
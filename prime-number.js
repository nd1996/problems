/**
 * Generates an array of prime numbers up to a given number.
 * 
 * @param {number} number - The upper limit of the prime numbers.
 * @return {Array} An array of prime numbers.
 */
const primeNumber = (number) => {
    // Initialize primeNo array with known prime numbers with single digit
    let primeNo = [2, 3, 5, 7];

    // Iterate through the rest of the numbers starting with 8 with an increment of 2 (to exclude even numbers)
    for (let i = 9; i <= number; i += 2) {
        let isPrime = true; // Assume the number is prime

        // Iterate from 3 to the current number
        for (let j = 3; j < i; j += 2) {
            if (i % j === 0) {
                isPrime = false;
                break; // Exit the loop if the number is not prime
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
console.log(primeNumber(50));

// Test Cases
console.log(primeNumber(100));
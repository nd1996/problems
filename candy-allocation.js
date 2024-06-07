/**
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 *      Each child must have at least one candy.
 *      Children with a higher rating get more candies than their neighbors.
 *      Return the minimum number of candies you need to have to distribute the candies to the children. 
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = (ratings) => {

    // Initialize variables
    let candyCollection = [];

    // Iterate through the ratings
    for (let i = 0; i < ratings.length; i++) {
        if (i === 0) {
            if(ratings[i] > ratings[i + 1]) {
                candyCollection[i] = 2;
            } else {
                candyCollection[i] = 1;
            }
        }

        if (i === ratings.length - 1) {
            if(ratings[i] > ratings[i - 1]) {
                candyCollection[i] = 2;
            } else {
                candyCollection[i] = 1;
            }
        }

        if (i > 0 && i < ratings.length - 1) {
            if (ratings[i] > ratings[i - 1] || ratings[i] > ratings[i + 1]) {
                candyCollection[i] = 2;
            } else {
                candyCollection[i] = 1;
            }
        }
    }

    // Return the total amount of candy
    return candyCollection.reduce((t, x) => t += x, 0);
};

// Test Cases
let ratings1 = [1, 0, 2];
console.log("Input: ", ratings1);
console.log("Output: ", candy(ratings1));

// Test Cases
let ratings2 = [1, 2, 2];
console.log("Input: ", ratings2);
console.log("Output: ", candy(ratings2));

// Test Cases
let ratings3 = [1, 2, 87, 87, 87, 2, 1];
console.log("Input: ", ratings3);
console.log("Output: ", candy(ratings3));
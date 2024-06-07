/**
 * Traps rain water between the bars.
 * 
 * @param {number[]} height - The height of each bar.
 * @return {number} - The total amount of water trapped.
 */
var trap = function(height) {
    // Initialize variables and check possibility of water trapped
    if (height.length < 3) return 0;

    // Initialize variables to track the maximum height of bars on the left and right sides
    let trapWater = [], maxLeftHeight = height[0], maxRightHeight = height[height.length - 1];

    // Iterate through the bars
    for (let i = 1; i < height.length - 1; i++) {
        // Initialize variable to track the amount of water trapped
        let water = 0;

        // Check if the bar is on the left side or right side
        if (maxLeftHeight < maxRightHeight || maxLeftHeight === maxRightHeight) {
            // Move from left side to right side
            maxLeftHeight = Math.max(maxLeftHeight, height[i]);
            // Add water trapped
            water = maxLeftHeight - height[i];
            // Add water trapped to the array
            trapWater[i] = water > 0 ? water : 0;
        } else {
            // Move from right side to left side
            maxRightHeight = Math.max(maxRightHeight, height[height.length - i]);
            // Add water trapped
            water = maxRightHeight - height[height.length - i];
            // Add water trapped to the array
            trapWater[height.length - i] = water > 0 ? water : 0;
        } // end if

    }

    // Return the total amount of water trapped
    return trapWater.reduce((t, x) => t += x, 0);
};

// Test Cases
let height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Input: ", height1);
console.log("Output: ", trap(height1))

// Test Cases
let height2 = [4, 2, 0, 3, 2, 5];
console.log("Input: ", height2);
console.log("Output: ", trap(height2))

/**
 * Removes all duplicates from a sorted array,
 * leaving at most two occurrences of each element.
 *
 * @param {number[]} nums - The sorted array
 * @return {number} - The length of the new array
 */
var removeDuplicates = function (nums) {
    // Initialize variables
    let i = 0; // The current element
    let k = 0; // The number of occurrences of the current element
    let newNums = []; // The new array without duplicates

    // Iterate through the array
    for (let j = 0; j < nums.length; j++) {
        // Check if the current element is the same as the previous element
        if (nums[j] === i && k < 2) {
            // If so, add it to the new array and increment the occurrence count
            newNums.push(nums[j]);
            k += 1;
        } else {
            // If not, add it to the new array and reset the occurrence count
            newNums.push(nums[j]);
            i = nums[j];
            k = 1;
        }
    }

    // Return the length of the new array
    return newNums.length;
};

// Test Case
let nums1 = [1, 1, 1, 2, 2, 3];
console.log("Input: ", nums1);
console.log("Output: ", removeDuplicates(nums1));
// Output: 5

// Test Case
let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 4];
console.log("Input: ", nums2);
console.log("Output: ", removeDuplicates(nums2));
// Output: 7

// Test Case
let nums3 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log("Input: ", nums3);
console.log("Output: ", removeDuplicates(nums3));
// Output: 7
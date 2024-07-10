/**
 * This function merges two sorted arrays into a single sorted array.
 *
 * @param {number[]} nums1 - The first sorted array.
 * @param {number} m - The number of elements in the first array.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of elements in the second array.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // Create a new array by copying the elements from nums1 up to the index m-1
    let newNums1 = nums1.slice(0, m);

    // Create a new array by copying the elements from nums2 up to the index n-1
    let newNums2 = nums2.slice(0, n);

    // Clear the nums1 array by resetting its length to 0
    nums1.length = 0;

    // Concatenate newNums1 and newNums2 into a single array called outputArray
    let outputArray = newNums1.concat(newNums2);

    // Sort the outputArray in ascending order using the sort() method
    outputArray.sort((a, b) => a - b);

    // Push all the elements of the outputArray into the nums1 array
    // The spread operator (...) is used to unpack the elements of the outputArray
    nums1.push(...outputArray);
};

// Test Case
let testNumsM1 = [1, 2, 3, 0, 0, 0];
let testM1 = 3;
let testNumsN1 = [2, 5, 6];
let testN1 = 3;
console.log("Test Case 1");
console.log("Input: nums1:", testNumsM1, "m:", testM1, "nums2:", testNumsN1, "n:", testN1);
merge(testNumsM1, testM1, testNumsN1, testN1);
console.log("Output: nums1", testNumsM1);
// Output: [1,2,2,3,5,6]

// Test Case
let testNumsM2 = [1];
let testM2 = 1;
let testNumsN2 = [];
let testN2 = 0;
console.log("Test Case 2");
console.log("Input: nums1", testNumsM2, "m", testM2, "nums2", testNumsN2, "n", testN2);
merge(testNumsM2, testM2, testNumsN2, testN2);
console.log("Output nums1: ", testNumsM2);
// Output: [1]

// Test Case
let testNumsM3 = [0];
let testM3 = 0;
let testNumsN3 = [1];
let testN3 = 1;
console.log("Test Case 3");
console.log("Input: nums1", testNumsM3, "m", testM3, "nums2", testNumsN3, "n", testN3);
merge(testNumsM3, testM3, testNumsN3, testN3);
console.log("Output nums1: ", testNumsM3);
// Output: [1]

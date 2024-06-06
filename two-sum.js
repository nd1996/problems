/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push(i, j);
                return output;
            }
        }
    }

    return output;
};

/*
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
*/
console.log(twoSum([2, 7, 11, 15], 9));

/*
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
*/
console.log(twoSum([3, 2, 4], 6));

/*
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/
console.log(twoSum([3, 3], 6));

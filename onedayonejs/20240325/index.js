/**
 * @param {number[]} nums
 * @return {number[]}
 */

const newLocal = function (nums) {
    let result = [];
    for (const num of nums) {
        if (nums[Math.abs(num) - 1] < 0) {
            result.push(Math.abs(num));
        } else {
            nums[Math.abs(num) - 1] *= -1;
        }
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 將陣列映射 1.取反 2.增加偏移量
var findDuplicates = function (nums) {
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


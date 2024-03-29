
let nums = [1, 3, 2, 3, 3];

var countSubarrays = function(nums, k) {
    let max_Element = Math.max(...nums);
    let result = 0;
    let left = 0;
    let right = 0;
    const n = nums.length;

    while (right < n) {
        k -= nums[right] === max_Element ? 1 : 0;
        right++;
        while (k === 0) {
            k += nums[left] === max_Element ? 1 : 0;
            left++;
        }
        result += left;
    }
    return result;
};


console.log(countSubarrays(nums, 2))
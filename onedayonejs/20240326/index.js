/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let len = nums.length;
    let seen = len + 1;

    // 將非正數和超出範圍的數字替換為佔位符
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0 || nums[i] > len) {
            nums[i] = seen;
        }
    }

    // 將已訪問的數字標記為負數
    for (let i = 0; i < len; i++) {
        let num = Math.abs(nums[i]);
        if (num <= len) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    // 找到第一個正數
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    // 如果所有數字都在正確的位置上，則返回下一個正數
    return len + 1;
};

//總結: 這題的解法是將數字放到正確的位置上，然後再找出第一個不在正確位置上的數字，這樣就是答案了。 這題的時間複雜度是O(n)，空間複雜度是O(1)。 這題的解法是非常巧妙的，需要多練習才能夠熟練掌握。 
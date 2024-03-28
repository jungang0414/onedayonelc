/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * 計算陣列中最長的子陣列長度，使得子陣列中的每個元素出現的次數不超過 k 次。
 * @param {number[]} nums - 輸入的陣列
 * @param {number} k - 每個元素出現的最大次數
 * @returns {number} - 最長的子陣列長度
 */
var maxSubarrayLength = function (nums, k) {
    const freq = {}; // 用來記錄每個元素出現的頻率
    const n = nums.length; // 陣列的長度
    let result = 0; // 最長子陣列的長度
    let i = 0; // 子陣列的起始索引
    let j = 0; // 子陣列的結束索引

    while (j < n) {
        freq[nums[j]] = (freq[nums[j]] || 0) + 1; // 更新元素的頻率
        while (freq[nums[j]] > k) {
            freq[nums[i]]--; // 如果頻率超過 k，則移動起始索引並減少頻率
            i++;
        }
        result = Math.max(result, j - i + 1); // 更新最長子陣列的長度
        j++
    }
    return result; // 回傳最長子陣列的長度
};
/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [10, 2, 9, 5, 3, 7, 101, 18, 102, 19, 20];

var lengthOfLIS = function (nums) {
    //先判斷陣列是否為空 是則回傳0
    if (!nums || nums.length === 0) {
        return 0;
    }

    //宣告一變數 n 將陣列的長度儲存
    const n = nums.length;
    //宣告一變數 dp 新增以 n 為長度的陣列 並將陣列中索引的第一到最後一位每個位子填入 1 
    const dp = new Array(n).fill(1);

    //使用for迴圈
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};

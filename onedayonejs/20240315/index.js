var productExceptSelf = function (nums) {
    //初始化變數n 為 nums的長度
    const n = nums.length;
    //宣告兩變數 分別為prefix, suffix
    const prefix = new Array(n).fill(1)
    const suffix = new Array(n).fill(1);
    console.log(prefix);

    //計算乘積 1 到 n-1
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    console.log(prefix);

    //計算乘積 n-2 到 0
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }


    const ans = [];

    for (let i = 0; i < n; i++) {
        ans[i] = prefix[i] * suffix[i]
    }

    return ans;
};

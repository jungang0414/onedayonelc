var numSubarrayProductLessThanK = function(nums, k) {
    //次數
    let count = 0;
    //乘積
    let product = 1;
    //左指標
    let left = 0;
    //右指標
    let right = 0;
    //當右指標小於nums的長度時
    while (right < nums.length) {
        //乘積等於乘積乘以nums[right]
        product *= nums[right];
        //當乘積大於等於k時
        while (product >= k) {
            //乘積等於乘積除以nums[left]
            product /= nums[left];
            //左指標加1
            left++;
        }
        //次數等於右指標減左指標加1
        count += right - left + 1;
        //右指標加1
        right++;
    }
    //回傳次數
    return count;
};

//總結：這題是一個滑動窗口的題目，透過左右指標來控制窗口的大小，當乘積大於等於k時，左指標往右移動，當乘積小於k時，右指標往右移動，並計算次數。
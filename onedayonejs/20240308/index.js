
nums = [1, 2, 2, 3, 1, 4];

var maxFrequencyElements = function (nums) {
    const map = {}; // 儲存元素出現的頻率
    let maxFrequency = 0; // 將頻率初始化

    // 計算每個元素的頻率
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, map[num]);
    }

    //計算具有最大頻率的元素
    let count = 0;
    for (const num in map) {
        if (map[num] === maxFrequency) {
            count += map[num]; //將最大出現頻率相加
        }
    }
    return count;
};

console.log(maxFrequencyElements(nums))
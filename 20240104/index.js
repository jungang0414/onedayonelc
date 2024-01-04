nums = [2, 3, 3, 2, 2, 4, 2, 3, 4]

var minOperations = function (nums) {
    //進行升序排序
    nums.sort((a, b) => a - b);

    let res = 0;
    let s = 0;
    while (s < nums.length) {
        let e = s;

        //&& AND當兩邊條件達成才執行
        while (e < nums.length && nums[e] === nums[s]) {
            e++
        }
        //因為有事先排序 所以數值為1
        const count = e - s;
        if (count === 1) {
            return -1;
        }
        //將count除以3 並且無條件捨去小數點加入到 res 上
        res += Math.floor(count / 3);

        //當 count除以3有餘數的話 將 res + 1
        if (count % 3 !== 0) {
            res += 1;
        }
        //最後將s 更新為的值 以處理下一組相同的數值
        s = e;
    }
    //回傳 res 總操作次數
    return res;
};
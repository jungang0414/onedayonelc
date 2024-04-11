let num = "1432219", k = 3;
var removeKdigits = function (num, k) {
    //宣告堆疊陣列 移動次數
    let stack = [];
    let remove = 0;
    // 遍歷字串元素
    for (let n of num) {
        // 當堆疊中有元素 && 遍歷的元素 < 堆疊中的元素 && 移動次數 < k
        while (stack.length && n < stack[stack.length - 1] && remove < k) {
            // 如果符合以上條件 則移除堆疊陣列中最後一個元素
            stack.pop();
            remove++
        }
        // 將元素壓進堆疊陣列中
        stack.push(n);
    }
    //做完上述迴圈後 判斷移動次數
    while (remove < k) {
        stack.pop();
        remove++
    }
    // 當堆疊陣列中 第一個元素為0 則移除
    while (stack[0] === "0") {
        stack.shift();
    }
    
    return stack.length ? stack.join('') : "0";
};


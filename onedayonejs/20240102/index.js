nums = [1, 3, 4, 2, 3, 1, 1, 1, 5];

var findMatrix = function (nums) {
    //在函數內部創建一個空陣列arr,用來儲存nums中每個數字出現的次數
    const arr = [];
    //使用for-of 迴圈遍歷 nums陣列
    for (const interator of nums) {
        //檢查arr陣列的interator的位置是否未定義或為假值
        if (!arr[interator]) {
            //若檢查為真,則在arr陣列的interator位置設置值為0 
            arr[interator] = 0;
        }
        //對arr陣列interator位置進行加1的動作
        arr[interator] += 1;
    }

    //初始化一個布林變量 avyValueFound 設為true 用於控制 While迴圈
    let anyValueFound = true;
    //創建一個空陣列 output 用來儲存最終的矩陣結果
    const output = [];
    //創建一個臨時陣列 tempOutput 用於儲存每一輪的子陣列
    let tempOutput = [];
    //使用 while迴圈 條件為anyValueFound 設為true
    while (anyValueFound) {
        //每當迴圈開始時 將anyValueFound 設為false
        anyValueFound = false;
        //重置 tempOutput 為空陣列
        tempOutput = [];
        //使用for迴圈遍歷 arr陣列
        for (let index = 0; index < arr.length; index++) {
            //檢查arr在索引的位置的值是否大於0
            if (arr[index] > 0) {
                //如果是,則將index天加到tempOutput陣列
                tempOutput.push(index);
                //減少 arr 在索引index位置的值
                arr[index] -= 1;
                //將 anyValueFound 設為true
                anyValueFound = true;
            }
        }
        //檢查 anyValueFound 是否為 true
        if (anyValueFound) {
            //如果是,則將tempOutput陣列添加到output陣列
            output.push(tempOutput);
        }
    }
    //迴圈結束 函數返回 output 陣列, 最終的矩陣結果.
    return output;
};

console.log(findMatrix(nums))
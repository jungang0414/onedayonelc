bank = ["011001", "000000", "010100", "001000"];

var numberOfBeams = function (bank) {
    //儲存最終數值
    let count = 0;
    //儲存當前行發射器或接收器的數量
    let current = 0;
    //儲存前一行發射器或接收器的數量
    let prev = 0;

    //使用for迴圈 遍歷 bank 陣列中的每一行
    for (let i = 0; i < bank.length; i++) {
        //取得bank陣列中的當前行 i 
        const row = bank[i]; 
        //宣告一變數 用來計算當前行發射器或接收器的數量
        let laserCount = 0;
        //使用for迴圈 遍歷當前行的每一個字符
        for (let j = 0; j < row.length; j++) {
            //若當前字符為1 , laserCount 則加1
            if (row[j] === '1') laserCount++;
        }
        //將當前行的發射器或接收器的數量賦值給 current
        current = laserCount;

        //若發射器或接受器數量為 0 則跳出當前迴圈執行下一迴圈
        if (laserCount === 0) continue;

        //若前一行的數量為 0 則將當前行的數值賦值給 prev 並跳出當前迴圈執行下一迴圈
        if (prev === 0) {
            prev = current;
            continue;
        }

        //若是當前行和前一行皆有數值則計算他們之間可能形成的激光束並加到 count
        count += current * prev;
        //更新 prev 當前行的數量
        prev = current;
    }

    //返回激光束的總數
    return count;
};

console.log(numberOfBeams(bank)) //8
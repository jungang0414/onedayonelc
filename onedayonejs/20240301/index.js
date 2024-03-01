/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    //將字串排序 使用reverse() 將字串元素反轉 "001" 則變為 "100"
    const sortedChars = s.split("").sort().reverse();
    console.log(sortedChars);
    //假如字串的第一個元素為 1 則將它移動到最後一位
    if (sortedChars[0] === "1") {
        // 創建一個新的陣列  不包含第一個字元並新增"1"在陣列中
        const modifiedChars = sortedChars.slice(1).concat("1");
        console.log(modifiedChars);
        return modifiedChars.join("");
    } else {
        return sortedChars.join("")
    }
};

maximumOddBinaryNumber("0011")
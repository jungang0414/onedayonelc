/**
 * @param {string} s
 * @return {number}
 */

let s = "trim split  return  length";

var lengthOfLastWord = function (s) {
    //字串處理
    let newS = s.trim().split(" ");
    //長度
    let result = 0;
    result = newS[newS.length - 1].length;
    return result;
};

console.log(lengthOfLastWord())
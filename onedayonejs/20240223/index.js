//13. Roman to Integer
var romanToInt = function (s) {
    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let cur = symbol[s[i]];
        let next = symbol[s[i + 1]];
        //判斷左邊數字是否大於右邊數字
        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }
    return result;
};

console.log(romanToInt("MCMLIV")) // 1954

//14. Longest Common Prefix

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
    let ans = strs[0];
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
        }
    }
    return ans;
};

console.log(longestCommonPrefix(["flower","flow","flight"])) //fl
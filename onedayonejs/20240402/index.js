/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    //長度不同就直接 false
    if (s.length !== t.length) return false;
    //宣告空集合 集合可以幫助判斷該值是否為唯一值
    let objS = {};
    let objT = {};
    //遍歷字串放入集合
    for (let i = 0; i < s.length; i++) {
        console.log(objS);
        console.log(objT);
        if (objS[s[i]] !== objT[t[i]]) return false;
        objS[s[i]] = i;
        objT[t[i]] = i;
    }
    return true;
};

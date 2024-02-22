/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    //條件限制
    if (n === 1) {
        return true;
    }
    if (n < 0) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }
    return true;
};

console.log(isPowerOfTwo(8))
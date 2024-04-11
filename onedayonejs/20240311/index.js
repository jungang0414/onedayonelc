let order = "cba";
let s = "abcd";
var customSortString = function(order, s) {
    const charCount = {};
    for (const char of order) {
        charCount[char] = 0;
    }
    console.log(charCount)

    for (const char of s) {
        if (charCount[char] !== undefined) {
            charCount[char]++;
        }
    }

    let sorted = '';
    for (const char of order) {
        sorted += char.repeat(charCount[char]);
    }

    for (const char of s) {
        if (!order.includes(char)) {
            sorted += char;
        }
    }
    return sorted;
};

customSortString(order,s)
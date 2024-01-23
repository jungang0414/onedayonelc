const a = 11;
const b = 1;

var addBinary = function (a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};

console.log(addBinary(a, b))
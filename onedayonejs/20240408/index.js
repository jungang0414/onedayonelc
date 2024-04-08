/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const prev = stack[stack.length - 1];
        const cur = s[i];
        if (prev && prev !== cur && prev.toUpperCase() == cur.toUpperCase()) {
            stack.pop();
        } else {
            stack.push(cur);
        }
        console.log(stack);
    }

    return stack.join('');
};
let s = "leEeetcode";
console.log(makeGood(s));

/**
s = "leEeetcode";

let i = 0;
stack = [];
prev = stack[-1];  // undefined
cur = s[0];  // l
// undefined && undefined !== l && undefined == L;  true && false && false;  false
stack.push(cur); // l

let i = 1;
stack = ['l'];
prev = stack[stack.length - 1]; // l
cur = s[1]; // e
// l && l !== e && L == E; // true && true && false;  false
stack.push(cur); // le

let i = 2;
stack = ['l', 'e'];
prev = stack[stack.length - 1]; // e
cur = s[2]; // E
// e && e !== E && E == E;  // true && true && true;  true
stack.pop(); //  stack = ['l'];

let i = 3;
stack = ['l'];
prev = stack[stack.length - 1]; // l
cur = s[3]; // e
// e && e !== e && prev.toUpperCase() == cur.toUpperCase(); true && false && false;  false
stack.push(); // stack = ['l', 'e'];

let i = 4;
stack = ['l', 'e'];
prev = stack[stack.length - 1];  // e
cur = s[4]; // e
// e && e !== e && prev.toUpperCase() == cur.toUpperCase(); // true && false && true;  false
stack.push(); // stack = ['l', 'e', 'e'];

以此類推
....

stack = ['l', 'e', 'e', 't', 'c', 'o', 'd', 'e'];

*/
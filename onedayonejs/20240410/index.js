/**
 * @param {number[]} deck
 * @return {number[]}
 */

let deck = [17, 13, 11, 2, 3, 5, 7];

var deckRevealedIncreasing = function (deck) {
    // 降序排列陣列回傳至新陣列 
    let stack = deck.sort((a, b) => b - a);
    // 揭示第一個元素 放進queue
    let queue = [stack.shift()];
    // 目前兩陣列中元素分別為
    // stack = [13, 11, 7, 5, 3, 2]
    // queue = [17];

    while (stack.length > 0) {
        // unshift 將元素新增至陣列開頭
        // shift   將陣列開頭第一個元素刪除
        queue.unshift(queue.pop());
        queue.unshift(stack.shift());
    }
    return queue;
};

console.log(deckRevealedIncreasing(deck));
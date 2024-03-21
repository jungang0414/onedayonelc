/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//三數交換
var reverseList = function(head) {
    let prev = null;
    let temp = null;
    let curr = head;

    while (curr !== null) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

//三數交換簡化
// var reverseList = function(head) {
//     let prev = null;
//     while (head) [head.next, prev, head] = [prev, head, head.next];
//     return prev;
// };

//遞迴
// var reverseList = function(head, prev=null) {
//     if(!head) return prev;
//     let next = head.next;
//     head.next = prev;
//     return reverseList(next, head);
// };


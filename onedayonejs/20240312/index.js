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
var removeZeroSumSublists = function (head) {
    if (!head) return head;
    // Initialize
    let dummy = new ListNode(0);
    dummy.next = head;
    //Build prefix sum
    let curr = dummy;
    let prefixSum = new Map();
    let sum = 0;

    while(curr) {
        sum += curr.val;
        prefixSum.set(sum, curr);
        curr = curr.next;
    }
    // Output
    curr = dummy;
    sum = 0;

    while(curr) {
        sum += curr.val;
        curr.next = prefixSum.get(sum).next;
        curr = curr.next;
    }
    return dummy.next;
};
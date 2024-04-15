/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0;
    let curSum = 0;
    //深度優先搜尋
    dfs(root);
    //遞迴
    function dfs(node) {
        curSum += node.val;
        //如果是葉子節點
        //將當前的數字加到sum
        if (!node.left && !node.right) {
            sum += curSum;
            return;
        }
        //左子樹
        if (node.left) {
            curSum *= 10;
            dfs(node.left);
            curSum -= node.left.val;
            curSum /= 10;
        }
        //右子樹
        if (node.right) {
            curSum *= 10;
            dfs(node.right);
            curSum -= node.right.val;
            curSum /= 10;
        }
    }
    return sum;
};
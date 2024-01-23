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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6], low = 6, high = 10
//output = 23;
var rangeSumBST = function (root, low, high) {
    //事先判斷root是否有元素
    if (root === null) {
        return 0;
    }

    if (low <= root.val && root.val <= high) {
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    } else if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    } else {
        return rangeSumBST(root.left, low, high);
    }
};


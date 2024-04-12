/**
 * @param {number[]} height
 * @return {number}
 */

let height = [4, 2, 0, 3, 2, 5];

var trap = function (height) {
    //蓄水量
    let water = 0;
    // 左右指針
    let left = 0;
    let right = height.length - 1;
    // 左邊最高的值
    let leftMax = 0;
    // 右邊最高的值
    let rightMax = 0;

    while (left < right) {
        // 判斷左右高度是否能夠蓄水
        if (height[left] < height[right]) {
            //判斷左邊最高的牆 替換成最高的
            if (leftMax <= height[left]) {
                leftMax = height[left];
            } else { 
                water += leftMax - height[left];
            }
            left++;
        } else {
            //判斷右邊最高的牆 替換成最高的
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
};
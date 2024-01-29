var minimumCost = function(nums) {
    //將陣列的第一個元素取出
    sum = nums[0]
    nums.shift()
    //遞增排序 由小到大
    nums.sort((a, b) => a - b)
    sum += nums[0]
    sum += nums[1]
    return sum;
}
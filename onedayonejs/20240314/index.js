var numSubarraysWithSum = function(nums, goal) {
    let count = new Map();
    count.set(0, 1);
    let sum = 0;
    let subarray = 0;

    for (let num of nums) {
        sum += num;
        if (count.has(sum - goal)) {
            subarray += count.get(sum - goal);
        }
        count.set(sum, (count.get(sum) || 0) +1);
    }
    return subarray;
};
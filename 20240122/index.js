nums = [1,2]

var rob = function(nums) {
    let robMoney = 0;
    let noRobMoney = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let newRob = noRobMoney + nums[i];
        let newNoRob = Math.max(noRobMoney, robMoney);
        robMoney = newRob;
        noRobMoney = newNoRob;
    }
    return Math.max(robMoney, noRobMoney)
};
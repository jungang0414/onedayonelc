n = 3

var climbStairs = function (n) {
    if (n < 2) {
        return 1;
    }

    let firstWays = 1;
    let secondWays = 1;
    let thirdWays = 0;

    for (let i = 2; i <= n; i++) {
        thirdWays = firstWays + secondWays;
        firstWays = secondWays;
        secondWays = thirdWays;
    }
    console.log(thirdWays);
    return thirdWays;
};

climbStairs(n)
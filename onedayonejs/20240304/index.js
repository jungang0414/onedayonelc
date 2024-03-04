var bagOfTokensScore = function (tokens, power) {
    //降冪排序tokens
    tokens.sort((a, b) => a - b);
    console.log(tokens)
    let score = 0,
        maxScore = 0,
        left = 0,
        right = tokens.length - 1;

    //判斷tokens大小
    while (left <= right) {
        if (power >= tokens[left]) {
            power -= tokens[left];
            score++;
            left++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) {
            power += tokens[right];
            score--;
            right--;
        } else {
            break;
        }
    }

    return maxScore;
};
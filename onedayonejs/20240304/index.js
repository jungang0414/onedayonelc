let tokens = [50, 120, 60];
let power = 120;

var bagOfTokensScore = function (tokens, power) {
    tokens.sort((a,b) => a - b);
    let score = 0, maxScore = 0;

    for (let i = 0; i < tokens.length; i++) {
        if (power >= tokens[i]) {
            score++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) {
            power += tokens[i];
            score--;
        } else {
            break;
        }
    }
    
    return maxScore;
};
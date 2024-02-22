var findJudge = function(n, trust) {
    trustCount = new Array(n + 1).fill(0);

    //遍歷 trust 
    for (const [a, b] of trust) {
        trustCount[a]--;
        trustCount[b]++;
    }

    //找到trustCount裡為 n - 1且索引對應的人沒有對任何其他人有信任的人
    for (let i = 0; i <= n; i++) {
        //確認該人是否滿足第一個條件
        if (trustCount[i] === n - 1) {
            let isJudge = true;
            //檢查是否存在索引為i的值
            for (let j = 0; j <= n; j++) {
                //確認 trust[i][j]存在
                if (j !== i && trust[i][j] !== 0) {
                    isJudge = false;
                    break;
                }
            }
            if (isJudge) return i;
        }
    }
    return -1;
}

const n = 3;
const trust = [[1, 3], [2, 3], [3, 1]];
console.log(findJudge(n, trust));
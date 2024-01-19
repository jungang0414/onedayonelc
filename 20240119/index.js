// (row, col), (row + 1, col - 1), (row + 1, col), (row + 1, col + 1).
matrix = [[2, 1, 3], [6, 5, 4], [7, 8, 9]];

var minFallingPathSum = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length,
        dp = Array(n).fill(0)
    for (let i = 0; i < m; i++) {
        let prev = [...dp]
        for (let j = 0; j < n; j++) {
            dp[j] = Math.min(prev[j - 1] || Infinity, prev[j], prev[j + 1] || Infinity) + matrix[i][j]
            console.log(Math.min(prev[j - 1] || Infinity, prev[j], prev[j + 1] || Infinity))
        }

    }

    return Math.min(...dp)
};

minFallingPathSum(matrix)

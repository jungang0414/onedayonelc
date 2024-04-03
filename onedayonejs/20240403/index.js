let board =
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];

let word1 = "ABCCED";
let word2 = "SEE";
let word3 = "ASFDA";
//DFS

var exist = function (board, word) {
    if (word === "") return true;

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0]) {
                if (dfs(0, row, col)) return true;
            }
        }
    }
    return false;

    function dfs(index, x, y) {
        if (index === word.length) return true;
        if (!board[x] || !board[x][y]) return false;
        if (board[x][y] !== '#' && board[x][y] === word[index]) {
            let ch = board[x][y];
            board[x][y] = '#';

            if (dfs(index + 1, x - 1, y)) return true; //往上尋找
            if (dfs(index + 1, x + 1, y)) return true; //往下尋找
            if (dfs(index + 1, x, y - 1)) return true; //往左尋找
            if (dfs(index + 1, x, y + 1)) return true; //往右尋找
            board[x][y] = ch;
        }
        return false;
    }
};

console.log(exist(board, word3));



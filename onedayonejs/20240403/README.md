# 79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

#### Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

#### Output: true

#### Constraints:

* m == board.length;
* n = board[i].length;
* 1 <= m , n <=6
* 1 <= word.length <= 15

使用DFS，深度優先搜尋法
首先，先找到word第一個字符在board出現的位置, 在從這個位置開始往上下左右尋找, 
若是沒有找到對應的字, 則回溯到前一個節點, 一直重複DFS, 直到index等於word長度, 
表示找到對應字符. 需額外注意邊界, 確保在board當中.

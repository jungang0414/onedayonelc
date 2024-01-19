931. Minimum Falling Path Sum

Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

給定一 n x n 的數組 返回數組內下降路徑的最小總和 下降路徑的方式為 
(row, col), (row + 1, col - 1), (row + 1, col), (row + 1, col + 1)

nxn = [[1,2,3], [4,5,6], [7,8,9]] 
首先判斷第一行的最小值, 往下尋找路徑
1 => 4 => 7, 12.  1 => 4 => 8, 13. 
1 => 5 => 7, 13.  1 => 5 => 8, 14. 1 => 5 => 9, 15
最小總和的下降路徑為 1 => 4 => 7,  等於 12

Example 1:
    Input: matrix = [[2,1,3],[6,5,4],[7,8,9]],
    Output: 13

首先判斷第一行的最小值 2, 1, 3 為 1. 往下尋找路徑
1 => 6 => 7, 14. 1 => 6 => 8, 15. 
1 => 5 => 7, 13. 1 => 5 => 8, 14. 1 => 5 => 9, 15.
1 => 4 => 8, 13. 1 => 4 => 9, 14.
最小總和的路徑為 一、 1 => 5 => 7, 13. 二、 1 => 4 => 8, 13.



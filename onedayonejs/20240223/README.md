13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

遍歷所給定的羅馬數字，將其對應的值相加，但要注意若是某一符號的值比右邊符號小，則需減去這個符號的值。
I < V < X < L < C < D < M
假設 MCMLIV 我們從左到右遍歷。遇到M 加上1000, 遇到C 但C比下一個符號M小 則減100 遇到M 加上1000, 遇到L 加上50, 遇到1 但I比下一個服到V小 則減1, 遇到V 加上5. 答:1000-100+1000+50-1+5 = 1954


14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

找到陣列中的最長的共同字，若沒有則回傳""

先找到陣列中最少的字串


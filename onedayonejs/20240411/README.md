# 402. Remove K Digits

Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.


#### The problem requires removing k digits from a given number num to form the smallest possible number.

### 方法

使用堆疊的方法, 迭代數字 num 中的 每個數字 n ;
每個數字將會與堆疊頂部的元素進行比較大小
當數字n小於堆疊頂部元素並且實際刪除次數(remove) < 最大刪除次數(k), 則從堆疊中彈出元素並將次數+1,直到不再滿足條件或達到 remove 達到 k, 此步驟保證最小的數字保持在堆疊的最上方.

刪除次數若未達最大刪除次數, 需在判斷一次remove < k 的話則繼續彈出元素並將次數+1.

為避免堆疊開頭為數字0, 需增加判斷將前導0移除.

最後將堆疊的元素連接成字串並回傳, 若是堆疊中沒有元素則回傳"0".




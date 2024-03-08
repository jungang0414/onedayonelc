3005. Count Elements With Maximum Frequency

You are given an array nums consisting of positive integers.

Input: nums = [1,2,2,3,1,4]

Output: 4

找出數組內數字出現的最大次數並相加回傳

1出現2次
2出現2次
3出現1次
4出現1次
最大次數為2 2+2=4

初始化一個映射frequencies來儲存每個元素的頻率。鍵是元素，值是其頻率。
將變數初始化maxFrequency為0.
將變數初始化totalFrequencies為0.
對於 nums 中的每個數字：
每次出現時增加其頻率 1。
初始化一個變數frequency來儲存目前元素的頻率。
如果frequency大於maxFrequency：
更新maxFrequency與frequency.
設定。totalFrequencies frequency這會將總和重設為當前最高頻率，因為任何先前的最高頻率都不再是最大值。
否則如果frequency等於maxFrequency：
添加。frequency 給 totalFrequencies
返回totalFrequencies。

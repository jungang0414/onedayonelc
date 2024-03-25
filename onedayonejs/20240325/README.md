442. Find All Duplicates in an Array

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.


1. 取反
從起始位置進行遍歷陣列，每次將索引為nums[i] - 1的數字取反
遍歷到值 nums[i]為負數, 需要忽略其負號。
若發現索引為 nums[i] - 1的數字已經是負數，說明之前出現過同樣的數字nums[i]，即找到重複數字。


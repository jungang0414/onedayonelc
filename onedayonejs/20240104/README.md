2870. Minimum Number of Operations to Make Array Empty

You are given a 0-indexed array nums consisting of positive integers.
There are two types of operations that you can apply on the array any number of times:

- Choose two elements with equal values and delete them from the array.
  選取陣列中相同的兩個數值並刪除
- Choose three elements with equal values and delete them from the array.
  選取陣列中相同的三個數值並刪除

Example:
Input: nums = [2, 3, 3, 2, 2, 4, 2, 3, 4]
Output: 4

**Return the minimum number of operations required to make the array empty, or -1 if it is not possible.**

# 定義 使陣列為空時需要幾次操作，若無法為空則回傳 -1

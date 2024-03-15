238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


1. 將num陣列長度初始化為, n 
2. 宣告兩個array，prefix, suffix, 兩者都以1初始化並與nums的長度相同,這些陣列將保存nums陣列中每個索引之前和之後的乘積.
3. 計算 prefix 乘積, 循環索引 1 到 n-1, prefix[i] 則會被分配 nums[i] 之前所有元素的乘積.
4. 計算 suffix 乘積, 循環從倒數第二個元素n-2開始, 一直向下到 0, suffix[i] 則會被分配nums[i] 之後的所有元素的乘積.
5. 將每個索引對應的prefix 和 suffix相乘後得到結果 prefix[i]*suffix[i]
6. return 結果


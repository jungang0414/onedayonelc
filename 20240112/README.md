1704. Determine if String Halves Are Alike

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half...

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

Example 1:
Input: s = "book"
Output: true
Explanation: a = "bo", b = "ok" . a has 1 vowel , b has 1 vowel. so they are alike.

# 一長度為偶數的字串，分成 a,b 同樣長度。 並判斷 a,b 出現 vowels (不分大小寫) 陣列中元素的次數 ，最後判斷 a,b vowel 出現的次數是否相同。

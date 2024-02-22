997. Find the Town Judge

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:
    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.

You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

建立一個陣列 trustCount 來追蹤每個人被信任的次數。
遍歷 trust 陣列，對每個信任關係更新 trustCount 陣列。
找出 trustCount 中值為 n - 1 且索引對應的人沒有對任何其他人有信任的人。
確認該人是否滿足第一個條件（不信任任何人），若是則回傳該人的編號，否則回傳 -1。
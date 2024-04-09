# 2073. Time Needed to Buy Tickets

There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.

Return the time taken for the person at position k (0-indexed) to finish buying tickets.


有n個人排隊購買票券, 每個人都有想要購買票券的數量, 每個人購買票券的時間為 1秒, 但一次只限購一張, 買完後需要重新排隊. 當想要購買的票券數量足夠後該人會離開隊伍.

回傳 索引值k 的人購買到足夠票券所需的時間.

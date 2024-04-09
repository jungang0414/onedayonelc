/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    // time 購買票券所花費的時間
    let time = 0;
    // 排隊的人數
    let len = tickets.length;
    // 索引值k 的顧客要購買到足夠的票券
    while (tickets[k] !== 0) {

        for (let i = 0; i < len; i++) {
            // 當索引值k的人購買到足夠的票券後 回傳他總共花費的時間.
            if (tickets[k] == 0) {
                return time;
            }
            // 每一個人只能購買一次票券, 必須重新排隊購買, 直到購買到所需要的票券後就會離開隊伍
            if (tickets[i] !== 0) {
                tickets[i] = tickets[i] - 1;
                time++
            }
        }
    }
    return time;
};
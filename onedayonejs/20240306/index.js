var hasCycle = function(head) {
    //假設兩個人 一個跑的快一個慢 他們起跑的時間不相同 跑得快的人總會追得上慢的人 代表存在循環
    let fast = head;
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (fast === head) return true;
    }
    return false;
};

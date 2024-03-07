var middleNode = function(head) {
    let first = head;
    let second = head;

    while (first !== null && first.next !== null) {
        second = second.next;
        first = first.next.next;
    }
    return second;
};
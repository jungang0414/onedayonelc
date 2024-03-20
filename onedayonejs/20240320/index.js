let list1 = [10, 1, 13, 6, 9, 5], a = 3, b = 4, list2 = [1000000, 1000001, 1000002];

var mergeInBetween = function (list1, a, b, list2) {
    let pre = list1;
    for (let i = 0; i < a - 1; ++i) {
        pre = pre.next;
    }
    let qre = pre.next;
    for (let i = 0; i < b - a + 1; ++i) {
        qre = qre.next;
    }
    pre.next = list2;
    while (list2.next) {
        list2 = list2.next;
    }
    list2.next = qre;

    return list1;
};

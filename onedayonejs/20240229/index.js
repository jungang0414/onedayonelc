var mergeTwoLists = function (list1, list2) {
    //設置虛擬節點
    let dummy = new ListNode(-1);
    let current = dummy;

    //判斷是否為空
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;
    return dummy.next;
};


console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
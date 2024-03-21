206. Reverse Linked List

#### Given the head of a singly linked list, reverse the list, and return the reversed list.

1. Initialize three pointers: prev, curr, and nextNode.
2. Iterate through the linked list.
3. Inside the loop, update nextNode to store the next node of curr.
4. Update the next pointer of curr to point to prev.
5. Move prev to curr, and curr to nextNode.
6. Continue iterating until curr becomes NULL.
7. Return prev, which is the new head of the reversed list.
/**
 * Leetcode - 143
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    const lastNode = findMiddle(head);
    let right = lastNode.next, left = head;
    right = reverseList(right);
    lastNode.next = null;
    while(right) {
        let nextInLeftLL = left.next;
        let nextInRightLL = right.next;
        left.next = right;
        right.next = nextInLeftLL;
        left = nextInLeftLL;
        right = nextInRightLL;
    }
    return head;
};

function reverseList(head) {
    let curr = head, prev = null;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function findMiddle(head) {
    let slow = head, fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
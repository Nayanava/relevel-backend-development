/**
 * Leetcode - 160
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let lengthA = length(headA);
    let lengthB = length(headB);
    
    if(lengthB > lengthA) {
        let diff = lengthB-lengthA;
        while(--diff >= 0) {
            headB = headB.next;
        }
    } else if(lengthA > lengthB) {
        let diff = lengthA-lengthB;
        while(--diff >= 0) {
            headA = headA.next;
        }
    }
    while(headA) {
        if(headA === headB) {
            break;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

const length = function(head) {
    let count = 0;
    while(head != null) {
        count++;
        head = head.next;
    }
    return count;
}

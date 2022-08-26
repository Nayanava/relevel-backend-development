/**
 * Leetcode - 142
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast) {
            break;
        }
    }
    if(!fast || !fast.next) {
        return null;
    }
    let temp = head;
    while(temp !== slow) {
        temp = temp.next;
        slow = slow.next;
    }
    return temp;
};
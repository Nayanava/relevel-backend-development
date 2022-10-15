/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if(!head || !head.next) {
        return head;
    }
    return reverseKGroup(head, 2);
};
var reverseKGroup = function(head, k) {
    let resHead, previous = head, temp = head;
    while(temp != null) {
        const start = temp;
        let count = 0;
        while(++count < k && temp.next) {
            temp = temp.next;
        }
        if(count < k) {
            previous.next = start;
            break;
        }
        const next = temp.next;
        temp.next = null;
        const reversed = reverseList(start);
        if(!resHead) {
            resHead = reversed;
        } else {
            previous.next = reversed;
            previous = start;
        }
        temp = next;
    }
    return resHead;
};

const reverseList = function(start) {
    let prev = null, curr = start;
    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
/*
Two numbers represented in the form of a linkedlist
346 + 123

3 -> 4 -> 6
1 -> 2 -> 3
-------------
4 -> 6 -> 9
*/

/**
 * 445. Add Two Numbers II
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const length1 = length(l1);
    const length2 = length(l2);
    let result;
    if(length2 > length1) {
        result = addToLargerNumber(l2, l1, length2 - length1);
    } else {
        result = addToLargerNumber(l1, l2, length1 - length2);
    }
    if(result[0]) {
        let newHead = new ListNode(1);
        newHead.next = currHead;
        return newHead;
    } else {
        return result[1];
    }
};

const addToLargerNumber = function(largerNumber, smallerNumber, diff) {
    if(--diff < 0) {
        return addToNumbersEqualLength(largerNumber, smallerNumber);
    }
    const [carry, currHead] = addToLargerNumber(largerNumber.next, smallerNumber, diff);
    return sumOfDigits(largerNumber.val, 0, carry, currHead);
} 

const addToNumbersEqualLength = function(head1, head2) {
    if(head1 === null) {
        return [0, null];
    }
    const [carry, currHead] = addToNumbersEqualLength(head1.next, head2.next);
    return sumOfDigits(head1.val, head2.val, carry, currHead);
}

const sumOfDigits = function (val1, val2, carry, currHead) {
    const sum = val1 + val2 + carry;
    const newHead = new ListNode(sum%10);
    newHead.next = currHead;
    return [parseInt(sum / 10), newHead];
}

const length = function(l1) {
    let count = 0;
    while(l1 != null) {
        count++;
        l1 = l1.next;
    }
    return count;
}
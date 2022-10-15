/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

 let listHead;
 var sortedListToBST = function(head) {
     listHead = head;
      const length = listLength(head);
     return listToTree(1, length);
 };
 
 const listLength = function(head) {
     let count = 0;
     while(head != null) {
         head = head.next;
         count++;
     }
     return count;
 }
 
 const listToTree = function(start, end) {
     if(start > end) {
         return null;
     }
     let mid = parseInt((end + start) / 2);
     const left = listToTree(start, mid-1);
     const root = new TreeNode(listHead.val);
     listHead = listHead.next;
     root.left = left;
     root.right = listToTree( mid+1, end);
     
     return root;
 }
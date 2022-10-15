//https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1
class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        //your code here
        let zeroList = null, oneList = null, twoList = null;
        let temp = head;
        while(temp != null) {
            const next = temp.next;
            temp.next = null;
            if(temp.data === 0) {
                zeroList = this.addToBegin(zeroList, temp);
            } else if(temp.data === 1) {
                oneList = this.addToBegin(oneList, temp);
            } else {
                twoList = this.addToBegin(twoList, temp);
            }
            temp = next;
        }
        return this.concat(zeroList, oneList, twoList);
    }
    addToBegin(list, node) {
        if(list === null) {
            list = node;
        } else {
            node.next = list;
            list = node;
        }
        return list;
    }
    concat(zeroList, oneList, twoList) {
        let head, temp;
        if(!zeroList && !oneList) {
            return twoList;
        }
        if(zeroList) {
            head = temp = zeroList;
            while(temp.next != null) {
                temp = temp.next;
            }
            temp.next = oneList;
        }
        if(oneList) {
            if(!head) {
                head = oneList;
            }
            temp = oneList;
            while(temp.next != null) {
                temp = temp.next;
            }
        }
        temp.next = twoList;
        return head;
    }

}
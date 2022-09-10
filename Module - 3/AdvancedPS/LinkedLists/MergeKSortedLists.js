/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if(!lists || !lists.length) {
        return null;
    }
    return mergeSort(lists, 0, lists.length-1);
};

var mergeSort = function (lists, lo, hi) {
    if(lo === hi) {
        return lists[lo];
    }
    const mid = (lo + hi) >>> 1;
    const left = mergeSort(lists, lo, mid);
    const right = mergeSort(lists, mid+1, hi);
    
    return merge(left, right);
}

var merge = function(list1, list2) {
   if(!list1) {
        return list2;
    }
    if(!list2) {
        return list1;
    }
    let resultList = null;
    let tracker = null;
    while(list1 && list2) {
        let smaller;
        if(list1.val < list2.val) {
            smaller = list1;
            list1 = list1.next;
        } else {
            smaller = list2;
            list2 = list2.next;
        }
        if(!resultList) {
            resultList = tracker = smaller;
        } else {
            tracker.next = smaller;
            tracker = tracker.next;
        }
    }
    if(list1) {
        tracker.next = list1;
    }
    if(list2) {
        tracker.next = list2;
    }
    return resultList;
}
/*
We are given the ‘n’ number of books arranged in sorted order. Where each book has a different number of
pages. You have to allocate books to ‘s’ count of students so that the maximum number of pages allotted to a
student is minimum.

Each student will be allotted at least one book and in contiguous order. Find the minimum possible number and
if the assignment is not valid, return -1.

input:  [12, 34, 67, 90], s = 2
output: 113
Explanation:

There are 2 students. Books can be distributed

In below fashion: 


a) 12 and 34, 67, 90
Maximum number of pages is allocated to student 2 with 34 + 67 + 90 = 191 pages.

b) 12, 34 and 67, 90
Maximum number of pages is allocated to student 2 with 67 + 90 = 157 pages.



c) 12, 34, 67 and 90
Maximum number of pages is allocated to student 1 with 12 + 34 + 67 = 113 pages.

The minimum pages = 113.
*/

const minimumRequiredStudents = (books, maxAllowedPages) => {
    let count = 1, sum = 0;
    for(const pagesInBook of books) {
        if(sum + pagesInBook > maxAllowedPages) {
            count++;
            sum = 0;
        }
        sum += pagesInBook;
    }
    return count;
}

const minimizeMaximumPages = (books, students) => {
    let lo = books[0], hi = 0;
    for(const pagesInBook of books) {
        lo = Math.max(lo, pagesInBook);
        hi += pagesInBook;
    }
    while (lo < hi) {
        const maxAllowedPages = (lo + hi) >>> 1;
        if(minimumRequiredStudents(books, maxAllowedPages) > students) {
            lo = maxAllowedPages + 1;
        } else {
            hi = maxAllowedPages;
        }
    }
    return lo;
}

console.log(minimizeMaximumPages([12, 34, 67, 90], 3));
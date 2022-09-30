/*
If all numbers are positive.
[1, 2, 3, 7, 5, 5], k = 10
sumArray = [1, 3, 6, 13, 18, 23]

a - b where b is positive always will always reduce the value
a - b where b is negative will always increase the value
10 - 5 = 5
10 - (-5) = 15

while we have not traversed the entire array
 if at any point my sum becomes > my target
    while(sum > target) {
        //keep removing from the front
    }
    if(sum === target) {
        result++;
    }
}
return result

let's say we encountered a negative number.
=> currently total sum = sum,
=> sum - x = target
=> sum - target = x

1, 2, 3, -4 k = 2
1 ....... 1........ 3
1 - 1
3 - 2 = 1
map = (sum, 1);
sum += arr[i];
if(sum - target is present in map) {
    result += map.get(sum - target);
}
map.put(sum, map.get(sum) + 1);

return count;
*/
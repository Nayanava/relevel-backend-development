/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

/*
Leetcode 
1011. Capacity To Ship Packages Within D Days

We were given we have to ship everything in 1 day = sum of all weights (55)
we were given that we have to ship all items without any bar on the days = 10

the range of my weights will lie between max value and total

10, 55 mid = 32, 2 days

10, 32 = 21, 3 days
10, 21 = 15, 

15 and 16 are two values in which we can ship within 5 days
minimize the maximum
[F,F,F, T, T, T, T, T, F, F, F]
leftmost from the right - hi = mid and low = mid + 1

    let lo = arr[0], hi = 0;
    for(let weight of weights) {
        if(lo < weight) {
            lo = weight;
        }
        hi += weight;
    }
    while(lo < hi) {
        const maxCapacity = parseInt((lo + hi) / 2);
        if(numberOfDaysToShip(weights, maxCapacity) < target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

function numberOfDaysToShip(weights, maxCapacity) {
    let sum = 0, days = 1;
    for(let weight of weights) {
        if(sum + weight > maxCapacity) {
            days ++;
            sum = weight;
        }
    }
    return days;
}
*/
var shipWithinDays = function(weights, days) {
    let lo = weights[0], hi = 0;
    for(let weight of weights) {
        if(lo < weight) {
            lo = weight;
        }
        hi += weight;
    }
    while(lo < hi) {
        const maxCapacity = parseInt((lo + hi) / 2);
        if(numberOfDaysToShip(weights, maxCapacity) > days) {
            lo = maxCapacity + 1;
        } else {
            hi = maxCapacity;
        }
    }
    return lo;
}

function numberOfDaysToShip(weights, maxCapacity) {
    let sum = 0, days = 1;
    for(let weight of weights) {
        if(sum + weight > maxCapacity) {
            days ++;
            sum = weight;
        }
        else {
            sum += weight;
        }
    }
    return days;
}
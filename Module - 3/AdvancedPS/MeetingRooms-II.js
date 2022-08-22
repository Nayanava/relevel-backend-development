/*
[0, 30], [5, 10], [15, 20]
flatten the information in a 2-D array
where each individual array stores 2 informations
1. time of event
2. type of event
1  start
-1 => end
[[0, start], [30, end], [5, start], [10, end], [10, start], [20, end]]
[0, start] - one MR
[5, start] - two MR
//this ??
[10, start] - three MR
[10, end] - two MR
//or this??
[10, end] - one MR,
[10, start] - two MR
[20, end] - one MR
[30, end] - zero MR

[[0, 1], [30, -1], [5, 1], [10, -1], [10, 1], [20, -1]]
mr += event[index][1]

(event1, event2) => {
    if(event1[0] < event2[0]) {
        return event1[0] - event2[0];
    } else {
        return event1[1] - event2[1];
    }
}
[[], [], []]
*/

 function meetingRooms(intervals) {
     const len = intervals.length;
     const events = new Array(2*len);
     let index = 0;
     for(let interval of intervals) {
         events[index++] = [interval[0], 1];
         events[index++] = [interval[1], -1];
     }

     events.sort((event1, event2) => {
        if(event1[0] !== event2[0]) {
            return event1[0] - event2[0];
        } else {
            return event1[1] - event2[1];
        }
    });
    let occupiedMRs = 0, minMRsRequired = 0;
    for(let event of events) {
        occupiedMRs += event[1];
        minMRsRequired = Math.max(minMRsRequired, occupiedMRs);
    }
    return minMRsRequired;
 }

 console.log(meetingRooms([[0, 30], [5, 10], [15, 20]]));
 console.log(meetingRooms([[0, 30], [5, 10], [10, 20]]));
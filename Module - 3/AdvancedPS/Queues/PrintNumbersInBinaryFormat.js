const Queue = require("./Queue");

function printFirstNNumbersInBinary(n) {
    const queue = new Queue(n);
    queue.enqueue("1");
    const result = new Array(n);
    let index = 0;
    while(index < n) {
        const val = queue.dequeue();
        result[index++] = val;
        if(index + queue.length() < n) {
            queue.enqueue(val + "0");
        }
        if(index + queue.length() < n) {
            queue.enqueue(val + "1");
        }
        
    }
    console.log(queue.length());
    return result;
}
//10, 11, 
//11, 100, 101
//100, 101, 110, 111

console.log(printFirstNNumbersInBinary(5));
console.log(printFirstNNumbersInBinary(10));
console.log(printFirstNNumbersInBinary(12));
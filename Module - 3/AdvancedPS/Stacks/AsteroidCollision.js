/*
Leetcode - 735
In solar system we have asteroids moving at constant speed. We are given an array that contains the integer values. The integer value determines the size of the asteroid which is while the sign of the interger determines the direction. Negative sign indicates it is moving towards left while positive indicates marble moves towards right. You need to find the state of the asteroid after the collision. In collision the asteroids with the higher size destroys the one with the lower size and the collision will happen only when they are moving in the same direction.
Sample Input-1: [11,16,-20] Output:
[-20]
Explaination:
11 and 16 will not collide with each other as they are moving in same direction, but on collision of 11 and -20, -20 will remain because of its greater size and on collision of 16 and -20, -20 will remain. Hence the final asteroid will be -20

Sample Input-2: [5,4,-2]
  Data Structures and Algorithms
 Output: [5,4]
Explaination:
-2 on collision with 5 and 4 will get destroyed, while 5 and 4 will never collide as they are moving in the same direction.
Sample Input-2: [-5,5]
Output:
[-5,5]



---------->  <---------
[11, 16, -20]

[-20]

[5, 4, -2]

4
5
[5, 4]
[-5, 5]
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

Array.prototype.isEmpty = function() {
    return this.length === 0;
}
Array.prototype.peek = function() {
    return this[this.length-1];
}

var asteroidCollision = function(arr) {
    const stack = [];
    for(let number of arr) {
        if(number < 0) {
            while(!stack.isEmpty() && stack.peek() >= 0 && Math.abs(number) > stack.peek()) {
                stack.pop();
            }
            /*
            1. if there are no more elements in the stack
            2. if there are numbers in the stack but the topmost element is a negative number.
            */
           if(stack.isEmpty() || stack.peek() < 0) {
                stack.push(number);
            } else if(stack.peek() === Math.abs(number)){
                stack.pop();
            }
        } else {
            stack.push(number);
        }
    }
    return stack;
};
console.log(asteroidCollision([11, 16, -20]));
console.log(asteroidCollision([5, 4, -2]));
console.log(asteroidCollision([-5, 5]));
console.log(asteroidCollision([-3, 5, -5]));
console.log(asteroidCollision([3, -4, -1]));
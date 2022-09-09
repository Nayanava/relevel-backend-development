const Queue = require("./Queue");

class FirstNonRepeatingCharacterFinder {
    constructor() {
        this.queue = new Queue();
        this.freq = new Array(26).fill(0);
    }
    firstNonRepeatingCharacter = function(character) {
        const asciiOfA = 'a'.charCodeAt();
        const positionOfCharacter = character.charCodeAt() - asciiOfA;
        if(this.freq[positionOfCharacter]++ === 0) {
            this.queue.enqueue(character);
        }
        while(!this.queue.isEmpty()) {
            const asciiOfFrontChar = this.queue.getFront().charCodeAt() - asciiOfA;
            if(this.freq[asciiOfFrontChar] > 1) {
                this.queue.dequeue();
            } else {
                break;
            }
        }
        return this.queue.isEmpty() ? -1 : this.queue.getFront();
    }
}

const str = "abacacb";
const resultFinder = new FirstNonRepeatingCharacterFinder();
for(const char of str) {
    console.log(resultFinder.firstNonRepeatingCharacter(char));
}

//a - a
//b - a
//a - b
//b - -1

// [a - 2, b - 2, ]
//a, b, a, b

//a, b, a, c, a, c, b

/*
freq [a - 2, b - 2, c - 2];
queue addToRear - []
a, a, b, b, b, b, -1
*/
console.log ('Jonas');
console.log(23.0);

let years = '';
//variable names in javascript can only contain
//numbers, letters, underscore(_) 
//or the dollar sign($)

let htmlCssJs = 'frontend'

let _new = 'new'
let _function = 'function'

let a = '.....';

function addTwoValues(a, b) {
    return a+b
}

let myFirstJob = 'programmer'
let myCurrentJob = 'teacher'

let job1 = 'programmer'
let job2 = 'teacher'


function adjectify(adjective) {

    return function (noun) {
        return adjective + " " + noun
    }
}

console.log(adjectify("warm")('city'))
var adjectify = adjectify('cool')
console.log(adjectify('breeze'))


var room = [1, 2, 3]
console.log(typeof(room[2]))
var newRoom = room.map(rm => {
    if(rm == '3') {
        return '4'
    } else {
        return rm
    }
})
console.log(typeof(newRoom[0]) + " " + typeof newRoom[2])
console.log(newRoom)
/*
8 bytes - 64 bits - (0 or 1)

/*
0, 1, 2, 3 in binary
000 - 0
001 - 1
010 - 2
011 - 3
100 - 4
101 - 5
110 - 6
111 - 7

2 bits how many numbers could we uniquely identify?
4 0-3
$ as 0 to (2^2 - 1)
8 - (0 to 2 ^ 3 -1)

-2^63 - 1 to 2 ^ 63 - 1

0 (000)
0 = positive
1 = negative
1(111) to 0(111)

*/
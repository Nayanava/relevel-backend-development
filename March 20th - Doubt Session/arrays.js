let friend1 = 'Samik';
let friend2 = 'Rahul';
let friend3 = 'Pranit';
let friend4 = 'Abhishek';
let friend5 = 'Vamshi';

sendAnInvite(friend1);
sendAnInvite(friend2);
sendAnInvite(friend3);
sendAnInvite(friend4);
sendAnInvite(friend5);

function sendAnInvite(friend) {
    console.log(`Hey! ${friend}, see you at my birthday party!`)
}

const friends = ['Samik', 'Rahul', 'Pranit', 'Abhishek', 'Vamshi'];
console.log(friends);

const friendsUsingConstructor = new Array('Samik', 'Rahul', 'Pranit');
console.log(friendsUsingConstructor);

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2]];

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]);
// returns "bread"

shopping[0] = 'tahini';
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]


const aboutMe = [
    'Nayanava', // -> 0
    'De', // -> 1
    1990, // -> 2
    ['Software Engineer', 'Teacher'], // -> 3
    ['Microsoft', 'Relevel By Unacademy'] // -> 4
]

console.log(aboutMe[3][0]);

const aboutMeObj = {
    firstName: "Nayanava",
    surname: "De",
    yearOfBirth: 1990,
    occupation: ['Software Engineer', 'Teacher'],
    organization: ['Microsoft', 'Relevel By Unacademy'],

    aboutMe : function() {
        return `I'm ${this.firstName} ${this.surname}. A ${this.occupation[0]} at ${this.organization[0]}`;
    }
}

aboutMeObj.firstName = 'Samik'

console.log(aboutMe);
console.log(aboutMeObj.aboutMe());
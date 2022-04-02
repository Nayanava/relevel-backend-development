let friend1 = 'Samik';
let friend2 = 'Kaushal';
let friend3 = 'Monish';
let friend4 = 'Rahul';
let friend5 = 'Kaashif';
let friend6 = 'Varun';
let friend7 = 'Pranit';
let friend8 = 'Abhigyan';
let friend9 = 'Anshul';


//what if I could have one single data structure, one single container or one single variable
// which can hold all of these friends or all of these values.. 
// Array - datastructure

/*
.
.
.
.
.
.
.
*/
function sendInvite(friendName) {
    console.log(`Hey ${friendName}! It's my birthday, see you there!!`);
}

//array literals
const friendList = ['Samik', 'Kaushal', 'Pranit', 'Rahul', 'Abhigyan'];
for(let index = 0; index < friendList.length; index++) {
    sendInvite(friendList[index]);
}

/*
1. create an array
2. initialize the array with all the items in the list
3. log the array and see what it outputs
*/

const shoppingList = ['br', 'mi', 'ch', 'hu', 'no'];
                     0    ,  1    ,   2     ,    3    ,    4
console.log(shoppingList);
// HW:Loop through the shopping list and print 
//----------------Using the Constructor Approach-------------------------

const friendListUsingConstructor = new Array('Samik', 'Kaushal', 'Pranit', 'Rahul');
//new object of type Array - whenever we call a constructor or invoke a constructor function
//we use the keyword new. 
console.log("Using constructor:" + friendListUsingConstructor);

console.log(typeof friendListUsingConstructor);
/*
1. create an array using Constructor
2. initialize the array with all the items in the list
3. log the array and see what it outputs 
*/


// Values present in an array can only be accessed using their position numbers in the array
// these position are nothing but numbers and we call these numbers as indexes
// array index -> its talking the or the position of the element in the array.
// the index always starts from 0, 1, 2, 3, ...., n-1

console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);
console.log(shoppingList[3]);
console.log(shoppingList[4]);
console.log(shoppingList[5]);

// one property of arrays and that is the length;
console.log(shoppingList.length);
const length = shoppingList.length;

console.log(shoppingList[length - 1])

//shoppingList[length] = window.prompt("Please enter a value for the shopping list");
console.log(shoppingList);
console.log(shoppingList.length);


const arr = []
arr[1000] = 'a'
console.log(arr);
//remove from the end of the array.

console.log(shoppingList.pop());
console.log(shoppingList);
console.log(shoppingList.push('hello'));
console.log(shoppingList);

/*
1. arrays are dynamic in nature
2. it is not necessary that one array will only hold one data type
it can hold multiple datatypes in the same array
*/

shoppingList.push(24)
shoppingList.push(undefined)
shoppingList.push(null);

console.log(shoppingList);


const aboutMe = [
    'Nayanava', // 0
    'De', // 1
    1990, //2
    [
        'Software Engineer', //0
         'Teacher'//1
    ] ,//3
    [
        'Microsoft', //0
         'Relevel By Unacademy' //1;
    ] //4
]

console.log(aboutMe);

//Multidimensional array -> which consists of two or more than two-dimensional
//arrays
console.log(aboutMe[3][0]);

const array = [
        ['X', '0', 'X'], //0
        ['X', '0', '0'],
        ['0', 'X', 'X']
    ];

//0, 0 - 0, 1 - 0, 2
//1,0

// -------------------- Objects ------------------------
// smartphone - 
/*
every object has some properties and some functionalities
Properties of a smartphone
1. color
2. operating system
3. its model
4. it's camera
.
.
.

Functionalities of a smartphone
1. calling
2. video, photos
3. running applications

Objects have properties and functions in the form of key value pairs
so everything is stored in the form of key- value pairs
*/

//Document on this
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

//object literals
const aboutMeObj = {
    firstName : 'Nayanava',
    surname : 'De',
    age: 2022 - 1990,
    occupations: ['Software Engineer', 'Teacher'],
    organizations: ['Microsoft', 'Relevel By Unacademy'],
    introduction: function () {
        return `Hi I'm ${this.firstName}, a ${this.occupations[0]} at ${this.organizations[0]}`
    }
}

firstName = 'Rehan';
console.log(aboutMeObj.firstName);

//----------------Using Constructor-----------------------

function AboutMe(firstName, surname, age, occupations, organizations) {
    this.firstName = firstName,
    this.surname = surname,
    this.age = age,
    this.occupations = occupations,
    this.organizations = organizations
}

const aboutRehan = new AboutMe('Rehan', 'Mohammed', '25', ['student'], ['relevel']);
console.log(aboutRehan);

//------------ Using Object.Create() function----------------
const Animal = {
    type: 'Invertebrates',
    displayType: function() {
        console.log(this.type);
    }
};
const animal1 = Object.create(Animal);

const fish = Object.create(Animal);
fish.type = 'Fishes';

animal1.displayType();
fish.displayType();

const aboutRehanCreate = Object.create(aboutMeObj);
aboutRehanCreate.firstName = 'Rehan';
aboutRehanCreate.surname = 'Mohammed';
aboutRehanCreate.age = 25;
aboutRehanCreate.occupations = ['student'];
aboutRehanCreate.organizations = ['Relevel'];

console.log(aboutRehanCreate.introduction());

/*
Homework:
1. Create objects using all three approaches of creating Objects
2. Declare functions inside the objects and then call them and print something
*/


'use strict'
//Call by value - primitive data types
/*
primitive datatypes are number, bool, string
anything other than the primitive datatypes are objects. - reference types.
*/

let firstName = ' Nayanava ';
//let nameClone = firstName;
//firstName = 'Pratik';

//console.log(nameClone, firstName);

function updateNameIf(firstName) {
    if(firstName.trim() !== firstName) {
        firstName = firstName.trim();
    }
    console.log(`"${firstName}"`);
}
updateNameIf(firstName);

console.log(`"${firstName}"`);

//----------------------------Reference Types------------------------
const Person = function(firstName, yearOfBirth, friends) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.friends = friends;
    Object.freeze(this.friends);
    this.age = function () {
        return 2022 - this.yearOfBirth;
    }
}

/* While creating any new object, there are only three ways
1. Object.create()
2. new Constructor()
3. {} - Object Literal

without using these three approaches - no new object will be created
hence no new memory reference will be created.

So any variable that is being assigned another variable which points to an object,
all such variables will start pointing to the same memory reference, or same address in memory

*/

let aboutMe = new Person('Nayanava', 1991);
let aboutMeClone = aboutMe;
let anyVariable = aboutMe;
aboutMeClone.firstName = 'Samik';
console.log(aboutMeClone.firstName, aboutMe.firstName);

/*

*/
function updateName(aboutMe, updatedName) {
    
    aboutMe.firstName = updatedName;
    console.log("inside updateName function", aboutMe.firstName);
}

function tryReferenceUpdateName(aboutMe, updatedName) {
    aboutMe = new Person(aboutMe.firstName, aboutMe.firstName);
    aboutMe.firstName = updatedName;

    console.log("inside tryReferenceUpdateName function", aboutMe.firstName);
}

updateName(aboutMe, "nayan");
console.log("outside updateName function", aboutMe.firstName);

tryReferenceUpdateName(aboutMe, 'Naya');
console.log("outside tryReferenceUpdateName function", aboutMe.firstName);


/*
What is a pure function - A pure function is one which returns the same
output given the same input..
*/


function sumOfTwoNumbers(a, b) {
    console.log(`sum of ${a} and ${b} is ${a + b}`);
}

for( let i = 1; i < 100; i++) {
    sumOfTwoNumbers(5, 10);
    //console.log(`sum of 5 and 10 is ${sumOfTwoNumbers(5, 10)}`);
}

let friends = ['Ram', 'Sam'];

function addAFriend(friends, friend) {
    friends.push(friend);
    return friends;
}

friends = addAFriend(friends, 'Samik');
console.log(friends);

friends = addAFriend(friends, 'Samik');
console.log(friends);

function validateSomething(object) {
    if(object.firstName !== 'Nayanava') {
        return object.firstName = null;
    }
} 

var object = {
    firstName : 'Geetanjali',
    yearOfBirth : 1990
}
validateSomething(object);
console.log(`hello ${object.firstName}`)

//--------------------Object.freeze()----------------
/*
    The Object.freeze() method freezes an object. 
    A frozen object can no longer be changed; 
    freezing an object prevents new properties from being added to it, 
    existing properties from being removed,  
    and prevents the values of existing properties from being changed. 
*/
const arr = [1, 2, 3, 4];
arr.push(5);

const aboutNayanava = new Person('nayanava', 31, ['Samik', 'Anshul', 'Raj', 'Nitsh']);
Object.freeze(aboutNayanava);

let aboutNayanavaClone = aboutNayanava;

//this will throw an error because we can't change the properties of a frozen object
//aboutNayanava.firstName = 'Nayan';
//console.log(aboutNayanava.firstName);

// aboutNayanava.friends.push('Rehan');
// console.log(aboutNayanava.friends);

// aboutNayanava.age = 54;
// console.log(aboutNayanava.age);
/*
When we freeze an object only the level 1 or my object gets frozen,
my object having reference to other objects will not be frozen
in order to freeze those objects which are stored inside my object, they 
have to be Object.freeze(object)
    object {
        object,
        object
    }
*/


//----------------Object.seal()------------------
/*
The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

Description

By default, objects are extensible (new properties can be added to them). 
Sealing an object prevents new properties from being added and marks all existing properties 
as non-configurable. This has the effect of making the set of properties on the object fixed.
Making all properties non-configurable also prevents them from being converted from
data properties to accessor properties and vice versa,
but it does not prevent the values of data properties from being changed.
Attempting to delete or add properties to a sealed object, 
or to convert a data property to accessor or vice versa, will fail, 
either silently or by throwing a TypeError 
(most commonly, although not exclusively, when in strict mode code).
*/

const aboutRehan = new Person('Rehan', 1997, ['Nayanava']);
Object.seal(aboutRehan);
aboutRehan.age = 25;
//delete aboutRehan.age;
console.log(aboutRehan.age);

console.log(Object.isSealed(aboutRehan));
console.log(Object.isSealed(aboutNayanava));

//-----------------Object.is()-------------------

//Homework - what is the difference between "===", "==" and Object.is()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

console.log(Object.is('nayanava', 'nayanava'));
console.log(Object.is(aboutNayanava, aboutNayanavaClone));

aboutNayanavaClone = new Person('nayanava', 31, ['Samik', 'Anshul', 'Raj', 'Nitsh']);
console.log(Object.is(aboutNayanava, aboutNayanavaClone));
console.log(aboutNayanava == aboutNayanavaClone);
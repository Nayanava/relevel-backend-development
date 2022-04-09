// three different ways
//1. object literal

const aboutSamik = {
    name : "Samik",
    age : 31,
    friends : ["p", "q"]
}
//2. using constructor


//This way of declaring a constructor
// implies that any object which will be created
//by invoking the AboutMe constructor
// it will have properties name, age and friends 
// and it will have a functionality called profile.

function AboutMe(name, age, friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;

    this.profile = function() {
        console.log(`Hi I'am ${this.name}`);
    }
}
const aboutNayanavaConstructor = new AboutMe('Nayanava', 31, ['a',  'b', 'c']);
console.log(aboutNayanavaConstructor.profile());

const aboutSamikConstructor = new AboutMe('Samik', 31, ['p', 'q']);


const aboutRehan = Object.create(aboutNayanavaConstructor);
aboutRehan.name = 'Rehan';
console.log(aboutRehan.profile());
console.log(aboutNayanavaConstructor.profile());

//-----------------------Dot Vs Bracket Notation-------------

const aboutNayanava = {
    name: "Nayanava",
    age : 0,
    friends : ['a', 'b']
}

console.log(aboutNayanava.name);

//while using bracket notation we have to pass the
//name of the property as a string..
console.log(aboutNayanava['age']);

//whenever we use a bracket notation
// we can pass any expression inside the brakcets.
// expression - anything that computes to a value.

// I have a scenario, I can ask users to tell me that they 
//want to know about me.
// const propertyName = window.prompt("What do you want to know about me?");

// console.log(aboutNayanava[propertyName]);
// if(aboutNayanava[propertyName] !== undefined) {
//     console.log(`${aboutNayanava[propertyName]}`);
// } else {
//     console.log('Please choose between name, age and friends');
// }

/*

Challenge
1. Create an object called Person and add properties
    1. firstName
    2. lastName
    3. yearOfBirth
    4. friends -> create an array of friends
    5. Create a function which prints the entire name of the person 
2. Using the properties of the function log the following statement:-
	firstName has (count of friends) friends, and his/her best friend is 
	first friend in the friends array.

*/

// -------------- Looping through Properties in Javascript -------------

//----- for...in approach ------

// for (each property in object)
for(const p in aboutNayanavaConstructor) {
     {
        console.log(`${p} : ${aboutNayanavaConstructor[p]}`)
    }
}

/*
 
it has two methods 1. hasNext, 2. next

if(object.hasNext() => if there is one more property)
    p = object.next() => the next property.

    name -> age -> friends -> profile
*/

//------------Object.keys()--------------
/* 

it returns all the properties or all the keys in the form of an array.
*/
console.log();
const properties = Object.keys(aboutNayanavaConstructor)

for(let counter = 0; counter < properties.length; counter++) {
    console.log(`${properties[counter]} : ${aboutNayanavaConstructor[properties[counter]]}`)
}

//properties[counter] 

//---------- Object.Entries()-----------

/*
[
    [name, nayanava],
       0,   1
    [age, 31],
     0,    1
    [friends, [a, b, c]],
      0,        1
    [profile, f()]
      0,       1
]

[[name, nayanava], [age, 31], [friends, [a, b, c]], [profile, f()]]
*/

const entries = Object.entries(aboutNayanavaConstructor);
for(let i = 0; i < entries.length; i++) {
    console.log(entries[i][0] + ":" + entries [i][1])
}
console.log(entries[2][1][0]);

/*

HW: Using Constructor
1. create a smartphone object using constructor
2. create multiple functions for each object -> running applications, calling etc. etc.
3. create different real objects by invoking the constructor
4. use the three different approaches to loop through all the properties in the object.

HW: Object.Create() -> prototyping
1. don't override certain properties -> see how it behaves
2. don't override certain functions -> see how it behaves
3. Override certain functions and then see what happens after that

*/


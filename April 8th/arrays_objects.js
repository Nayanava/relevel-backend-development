

const arr = [4, 5, 3, 2, 1]
console.log(typeof arr);
arr.sort();
console.log(arr);

let stringArr = ['samik', 'roshan', 'abhigyan', 'rehan', 'santosh', 'rahul'];
stringArr.sort();
// lexicographical order - 
console.log(stringArr);

// ---------------------------------------------------------------
/*
 What does an object usually consist of??
 - properties/attribute
 - functionalities/behaviour/methods.
 all of these are basically key value pairs.
*/

const aboutMe = {
    firstName : 'Nayanava',
    yearOfBirth: 1990,
    calculateAge: function() {
       return 2022 - this.yearOfBirth;
    }
}

console.log(`Age of ${aboutMe.firstName} is ${aboutMe.calculateAge()}`);
//---------------------OOP-----------------------
/*
    In most OOP languages we have a concept of class.
    Classes are like blueprints - a logical or conceptual thing
    which doesn't have any physical existence.

    I am trying to build a house..
    Analogous to - 

    imagine in the beginning when you only have a plot.
    but there is an idea, an architecture or a blueprint of how the society will
    be constructed. You will see floor plans, design plans. etc. etc.
    Classes - are those blueprints from which we are going to create
    real houses or real objects.

    but when you actually see a flat which is a 2 BHK or entire society that is the
    real thing or something that physical existence. 

    an apartment is basically an instance of that architecture plan.
    in very very large societies, you will see different towers having the same plan

    each of these towers or each of these villas are instances or objects
    of this architecture plan.

    in javascript also we have the use of instance..

    Inheritence - in traditional OOP languages,
    you are able to access, properties and functionalities of the parent class.


    we have a person class.
    if we talk in terms of a college
    college - students and teachers

            Person - {Name, yearOfBirth, idcards, identificationMarks, address}
            /      \

        /              \
    Teachers         Students

    In Javascript every object has a prototype.
    Every object inherits from a prototype.

    Prototype can have some properties, some functionalities
    which will be automatically inherited by the object which is 
    linked to this prototype.

    in javascript every object that we create is following 
    prototypal inheritence.

    3 ways of implementing Prototypal Inheritence in javascript.
        1. constructor functions
        2. ES6 Classes
        3. Object.create()


*/

console.log(arr instanceof Object);

/*
constructors are nothing but functions.
1. the convention of naming constructors is to use the first letter as Capital
*/
const Person = function(firstName, yearOfBirth) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    //never do this.. because this will create a copy of the same function
    //across all the different objects that have been created during the lifecycle
    // of the program.
    // this.calculateAge = function() {
    //     return 2022 - this.yearOfBirth;
    // }
}

/*
1. A new empty object is created
2. A function is called, (the constructor is called)
and "this" keyword will be created inside this new object.
This means that in terms of the execution context of the Person function,
the "this" keyword will point to this new object here that was created.

3. This newly constructed object Person{} is linked to a prototype.
=> this newly constructed object Person{} is linked to Person constructor's 
Prototype property. Person.prototype
4. Function automatically returns the Person{}.
*/
const nayanava = new Person('nayanava', 1990);
const samik = new Person('samik', 1990);
const rehan = new Person('Rehan', 1997);
console.log(nayanava instanceof Object)
console.log(nayanava, samik, rehan);
/*
Prototypes - we will come across two types of Prototypes
1. Prototype property - this belongs to a function
2. Prototype object - this belongs to an object and is the link to its prototype

Each and every function that we create in JS has a property called
Prototype. 

Every object created using a Constructor (in our example - Person) will get
access to all the methods and properties that we define on the constructor's
prototype property.

function including constructor has a prototype property
any object that we create by invoking that constructor will have access
to all the methods and properties that we define on the constructor's
prototype property.

*/

Person.prototype.calculateAge = function() {
    return 2022 - this.yearOfBirth;
}

console.log(`age of nayanava is `, nayanava.calculateAge());
/*
The prototype of the object that we created
can be accessed using a special property which is
present in every object that we create. __proto__
*/
console.log(nayanava.__proto__ === Person.prototype);

console.log(Object.getPrototypeOf(nayanava) === Person.prototype);
console.log(samik.calculateAge());

/*
What is difference between a method and a function?
    Methods are functions which are accessed using an object.
*/
//Inherited properties
Person.prototype.species = 'Homo sapiens';
console.log(nayanava.species);

Person.prototype.getSpecies = function() {
    const value = this.species;
    return value;
}
//now how do we distinguish between an object's own property
//vs inherited properties
console.log(nayanava.hasOwnProperty('firstName'));
console.log(nayanava.hasOwnProperty('species'));

console.log(nayanava.getSpecies());

/*
                                     **this prototype is not the object of the function
                                     but the objects that we create using the constructor
                                     Person
                            .prototype
    Constructor function   ------------> Prototype object
    [Person()]             <------------ [Person.prototype]
                            .constructor    calculateAge()



whenever we invoke or call a property or a method on a particular object
Javascript will first seach for these properties or methods inside current
object. If it is not able to find the property or the object, then it will
lok inside the prototype object of the current object. and then it will go to
prototype of the prototype.
*/                         


let object = nayanava;
do
{
    object = Object.getPrototypeOf(object); //Person.prototype
    console.log(object);
} while(!object.hasOwnProperty('__proto__'));

object = arr;
do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while(!object.hasOwnProperty('sort'));

console.log(Array.prototype);
//any array object that we create using the new Array() constructor
// will have the Array.prototype as the __proto__ object
//or will be linked to the Array.prototype object.

/*
    Prototype
 [Object.prototype]
 __proto__: null
        ^
        |
        |
    Prototype
 [Person.prototype]
 __proto__:Object.prototype
        ^
        |
        |
    Object
  [nayanava]
  __proto__: Person.prototype

*/
Array.prototype.add = 'hello';
console.log(arr.add);
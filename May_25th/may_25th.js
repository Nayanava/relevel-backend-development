//Different ways of Creating Objects
//1. literal approach - Object literals

const student = {
    name: 'Rahul',
    birthYear: 1980,
    occupation: 'ABC',
    gender: 'Male',
    calcAge: function () {
        return 2022 - this.birthYear;
    }
}
console.log(student instanceof Object);
// 2 ways of accessing properties of an object
//dot operator and the expression operator

// console.log(student.name);
// console.log(student['name']);

const firstName = 'name';
console.log(student[firstName]);
console.log(student.firstName);

//A. Rahul, undefined
//B. undefined, Rahul
//C. undefined, undefined
//D. Rahul, Rahul

const student2 = {
    name: 'Geetanjali',
    birthYear: 1987,
    occupation: 'Teacher',
    gender: 'Female',
    calcAge: function () {
        return 2022 - this.birthYear;
    }
}
const student3 = {
    name: 'Samik',
    birthYear: 1990,
    occupation: 'Software Engineer',
    gender: 'Male',
    calcAge: function () {
        return 2022 - this.birthYear;
    }
}
// Using Constructor
//1. special type of function
//2. We start with Capital Letter

function Student(name, birthYear, occupation, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.occupation = occupation;
    this.gender = gender;

    //Is this the correct approach to declare a function inside the constructor
    // True
    // False
    //never do this
    // this.calcAge = function () {
    //     return 2022 - this.birthYear;
    // }
    
}

Student.prototype.calcAge = function () {
    return 2022 - this.birthYear;
}
//1. creates new object
//2. it will point the this keyword to the new object
//3. it points the object's prototype(__proto__) to the prototype property of the constructor function.
//4. returns the object.
const studentAbhigyan = new Student('Abhigyan', 1997, 'Student', 'Male');
console.log(studentAbhigyan.name);
const studentKislay = new Student('Kislay', 1995, 'Software Engineer', 'Male');
console.log(studentAbhigyan.__proto__ === Student.prototype);
console.log(studentAbhigyan);
console.log(studentKislay);

console.log('Age of', studentAbhigyan.name, 'is', studentAbhigyan.calcAge());
console.log('Age of', studentKislay.name, 'is', studentKislay.calcAge());

console.log(studentAbhigyan.toString());

//-----------------Class inheritence-------------------
/*
1. Classes are nothing but syntactic sugar in Javascript
2. Class keyword was introduced in ES6
3. Class
*/

//What are the different ways of initializing a class?
//Classes are specidal type of functions
//1. declaration and expression

//Class expression
// const Person = class {

// }
// Class declaration

class Person {
    #salary;
    constructor(fullName, birthYear, experiences, salary) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.experiences = experiences;
        this.salary = salary;
        Person.count++;
    }
    //All methods that we write inside a class get associated with the 
    //prototype property of the person class!
    calcAge() {
        return 2022 - this.birthYear;
    }
    //getters and setters
    get latestExperience() {
        return this.experiences[this.experiences.length - 1];
    }

    set addExperience(experience) {
        this.experiences.push(experience);
    }

    set fullName(name) {
        if(name.includes(' ')) {
            this._fullName = name;
        } else {
            alert('This is not the full name');
        }
    }
    get fullName() {
        return this._fullName;
    }
}

const nayanava = new Person('Nayanava De', 1990, ['Amadeus', 'Snapdeal', 'Phonepe'], 10000);
console.log(nayanava);
console.log(nayanava.__proto__ === Person.prototype);
console.log(nayanava.calcAge());
//console.log(nayanava.#salary);
const samik = new Person('Samik Sengupta', 1990);
console.log(samik);

console.log(nayanava.latestExperience);
nayanava.addExperience = 'Microsoft';
console.log(nayanava.experiences);
console.log(nayanava.fullName);
nayanava.fullName = 'Ed avanayan';
console.log(nayanava.fullName);
console.log(nayanava.type);
console.log(Person.type);
console.log(Person.count);
//---- static methods----
/*
static properties or methods are class level properties or methods. they are not tied to any
individual object.
*/

class Vehicle {
    constructor(brand, model, price, wheels) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.wheels = wheels;
    }
}

class Bike extends Vehicle{
    constructor(brand, model, price, wheels, centerOfGravity) {
        super(brand, model, price, wheels);
        this.centerOfGravity = centerOfGravity;
    }
}

class SportsBike extends Bike {
    constructor(brand, model, price, wheels, centerOfGravity, isRoadLegal) {
        super(brand, model, price, wheels, centerOfGravity);
        this.isRoadLegal = isRoadLegal;
    }
}

const bike = new SportsBike("BMW", "God Knows", "35,00,000", 2, "4'", true);
console.log(bike);
console.log(Person.obj);

class Circle {
    radius = 0;
    #pie;
    constructor(radius) {
        this.radius = radius;
        this.#pie = Math.PI;
    }

    crcumference() {
        return 2 * this.#pie * this.radius;
    }
    get pie() {
        return this.#pie;
    }
}

const circle = new Circle(5);
console.log(circle.crcumference());
console.log(circle.radius);
console.log(circle.pie);
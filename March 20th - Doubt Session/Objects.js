function AboutMe(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;

    this.profile = function () {
        return `Hi! You are vieweing ${name}'s profile!`
    }
}

const aboutNayanava = new AboutMe('Nayanava', 32, 'Software Engineer');
const aboutNayanavaLiterals = {
    firstName : 'Nayanava',
    surname : 'De',
    age: 2022 - 1990,
    occupations: ['Software Engineer', 'Teacher'],
    organizations: ['Microsoft', 'Relevel By Unacademy'],
    introduction: function () {
        return `Hi I'm ${this.firstName}, a ${this.occupations[0]} at ${this.organizations[0]}`
    }
}

console.log(aboutNayanava.age);
console.log(aboutNayanava['age']);

//since I said that the bracket notation can accept expressions,
// so let's try something like this. We can take input from the user,
// what he or she wants to know about me for example

// let inputProperty = prompt("What do you want to know about Nayanava??");
// if(aboutNayanavaLiterals[inputProperty]) {
//     console.log(aboutNayanavaLiterals[inputProperty]);
// } else {
//     console.log("We don't have such details about Nayanava");
// }


for (const property in aboutNayanava) {
    console.log(`${property} : ${aboutNayanava[property]}`)
}

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


for (const property in fish) {
    console.log(`${property} : ${fish[property]}`)
}

function AboutMe(firstName, surname, age, occupations, organizations) {
    this.firstName = firstName,
    this.surname = surname,
    this.age = age,
    this.occupations = occupations,
    this.organizations = organizations
}

AboutMe.prototype = Object;
const aboutRehan = new AboutMe('Rehan', 'Mohammed', '25', ['student'], ['relevel']);

for(const property in aboutRehan) {
    console.log(`${property} : ${aboutRehan[property]}`)
}

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
//   if (obj.hasOwnProperty(prop)) {
//     console.log(`obj.${prop} = ${obj[prop]}`);
//   }
  console.log(`obj.${prop} = ${obj[prop]}`);
}

for( const key in Object.keys(aboutRehan)) {
    console.log(`${key} : ${aboutRehan[key]}`)
}
const arr = Object.keys(aboutRehan);
arr.forEach(element => console.log(aboutRehan[element]));


const entries = Object.entries(aboutRehan);
console.log(`${entries[0][0]} : ${entries[0][1]}`)
for (const [key, value] of Object.entries(aboutRehan)) {
    console.log(`${key} : ${value}`)
}
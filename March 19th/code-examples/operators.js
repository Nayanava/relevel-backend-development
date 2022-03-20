//0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean('0'))
console.log(Boolean(Number('0')))
console.log(Boolean(''))
console.log(Number('Abhigyan'))
console.log(typeof Infinity)

let age = 32;
console.log(age);
age = 33;
console.log(age);

let children;
children = 33;
console.log(children);

// -------- CONST -----------

// const birthYear = '1990'

const yearOfManufacture = undefined;

// console.log(birthYear + " " + yearOfManufacture)

let assigningConstToLet = yearOfManufacture;
assigningConstToLet = 1992;

var job = 'programmer'
console.log(job)
job =  'teacher'
console.log(job)

var undefinedVar;
undefinedVar = 10;


lastName = 'De'
console.log(lastName)

//-----------STRING LITERAL---------
const firstName = 'Nayanava'
const birthYear = '1990'
const currentYear = '2022'
const myJob = 'Software Engineer'
// Hi I'm Nayanava, a 32 year old Software Engineer
const aboutMe = "Hi I'm "  + firstName + " a " + 
        (currentYear - birthYear) + " year old " + myJob + "!";

const aboutMeInStringAndTemplateLiterals = 
    `Hi I'm ${firstName} a ${currentYear - birthYear} year old ${myJob}!`
console.log(aboutMe)
console.log(aboutMeInStringAndTemplateLiterals)

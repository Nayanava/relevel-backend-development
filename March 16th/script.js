function logger() {
    console.log('This is a logger function');
}

function fruitProcessor(apples, oranges) {
    return `Juice with ${apples} apples and ${oranges} oranges.`;
}
logger(23);
console.log(`Apple juice with ${fruitProcessor(5, 0)}`);
console.log(`Apple and Orange juice with ${fruitProcessor(2, 3)}`);


//------------------------------Operators------------------------------

//-- see how we used descriptive name here

const now = 2022
const ageOfNayanava = now-1990
const ageOfRamesh = now-1965
console.log(ageOfNayanava, ageOfRamesh)

console.log(ageOfNayanava * 2, ageOfRamesh / 3, 2 ** 3)

// 2 ** 3 means to the power 3 = 2 * 2 * 2

const firstName = 'Nayanava'
const lastName = 'De'
console.log(firstName + ' ' + lastName)

//so let's say
let x = 10 + 5; //15
console.log(x);


x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
//here we are reassiging the x variable and hence we using let.
//and similarly we have x--;
x--; // x = x - 1
console.log(x);


//Comparison Operators
//This is like asking the operator if the age of Nayanava is greater than the age of Ramesh
console.log(ageOfNayanava > ageOfRamesh)
//The result of this is evaluation is false because ageOfNayanava is 32 whereas ageOfRamesh is 57

//We also have >, <, >=, <=


//---------------Strings---------------------

const job = 'Software Engineer';
const birthYear = 1990;
const currentYear = 2022
//let's now use these variables to build a string
//something like. I am Nayanava, a 32 year old Software Engineer

//so one way we learnt it is 
const nayanava = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!"

console.log(nayanava)

//(year - birthYear)
// Now you might be wandering that this value is a number where as the rest of the things is a string 
//and how does it work, and it has something to do with type coercion which we will take a look in sometime.

//Using string literals we can form a string in a much simpler manner and we can just insert the variables in the
//inside the string and they will be replaced with the values.
//so template literals can assemble multiple pieces into one final string.

const nayanavaWithTemplateLiteral = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(nayanavaWithTemplateLiteral)
console.log(`I'm Nayanava, a 32 years old Software Engineer!`)

//----------------TYPE CONVERSION--------------------
const inputBirthYear = '1991'
//But now if we want to do some calculations with this inputYear it won't work
//let's try
//remember that when we have a string and we add something to a string it will actually concatenate to the string

console.log(Number(inputBirthYear) + 18)
//Now what if we are trying to convert something to a number that is impossible to convert to a number

console.log(Number('Hello'))
//And this will return Not a Number - actually means invalid number.

//--------------------TYPE COERCION------------------
console.log('I am ' + 23 + ' years old')
// in this case we have two different types of values a string, a number and then a string.
// so in javascript this + operator over here triggers a type coercion to strings.
// So whenever there is a coercion between a number and a string the number will be converted to a string

//Now another very important thing is that, not all operators trigger a coercion to string.
//let's take an example
console.log('23' - '10' - 3)
//what do you think will happen now?? 
//Well it looks like javascript converted the strings to numbers and that's why we get 10.
// so the - operator converts the strings to number.

//Let's try another one
console.log('23' * '2')
console.log('23' / '2')
console.log('20' === 20)
//------------------------------Truthy and Falsy Value---------------------------------
console.log(Boolean('NaN'))
console.log(Boolean('0'))
console.log(Boolean(undefined))
console.log(Boolean('Nayanava'))
console.log(Boolean(''))
console.log(Boolean(null))


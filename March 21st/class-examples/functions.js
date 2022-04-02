'use strict'
let hasDriversLicense = false;

const hasPassedTest = true;
if(hasPassedTest) {
    hasDriversLicense = true;
}
if(hasDriversLicense) {
    console.log('Yay! I will get my driving license now!')
}

function greet() {
    console.log('Hello, my name is Nayanava!')
}

function addTwoNumbers(a, b) {
    return a + b;
}

function isAGreaterThanB(a, b) {
    return a > b;
} 

let sum = addTwoNumbers(10, 15)
console.log(sum)
greet(); // --> this function doesn't have any return value or this function doesn't return anything
// so we don't need to assign the result to any other variable. 
var stringToNumber = Number('25')
console.log(`value is ${stringToNumber} and type is ${typeof stringToNumber}`);

// A full fledged function
// Let's say we want 
//Given the length of three sides, we have to figure out if we can form a triangle or not.

function sumOfTwoSides(a, b) {
    return a + b;
}

function isSumGreaterThanOneSide(sum, side) {
    return sum > side;
}

function isTrianglePossible(firstSide, secondSide, thirdSide) {
    const sumFirstSecond = firstSide + secondSide;
    const sumFirstThird = firstSide + thirdSide;
    const sumSecondThird = secondSide + thirdSide;
    if(!isSumGreaterThanOneSide(sumFirstSecond, thirdSide)) {
        return false;
    } else if(!isSumGreaterThanOneSide(sumFirstThird, secondSide)) {
        return false;
    } else {
        return isSumGreaterThanOneSide(sumSecondThird, firstSide)
    }
}

if(isTrianglePossible(3, 4, 5)) {
    console.log(`Triangle is possible!`)
} else {
    console.log(`Can't form a triange!`)
}

//----------------------FUNCTION DECLARATION VS FUNCTION EXPRESSION------------------
//----- FUNCTION TO CALCULATE THE AGE GIVEN A BIRTHYEAR
//------ using declaration

const currentYear = 2022
function calculateAge(birthYear) {
    return currentYear - birthYear;
}

// we define a function, without a name but we still define the parameters
// store all of these into a variable.

//so understand function is a type in javascript just like a string or a number.
// and we assign this function to a const variable.
const calculateAgeUsingExpression = function (birthYear) {
    return currentYear - birthYear;
}

calculateAgeUsingExpression = function() {

}
console.log(calculateAge(1991), calculateAgeUsingExpression(1991));
console.log(typeof calculateAgeUsingExpression);

(function() {
    console.log(`I'm Nayanava!`)
})();


const promise = async function updateS3Object(initialVersionId, currentConfig) {
    validateObjectVersionId(initialVersionId, function (err, data) {
        if(err) {
            return race_response;
        }
        //s3.putObject....
    })
}

function validateObjectVersionId(initialVersionId, callback) {
    //I will call s3, fetch the data, validate the data
    if(initialVersionId !== currentVersionId) {
        callback(true, undefined)
    } else {
        callback(undefined, true)
    }
}

const data = (await (s3.getObject(getParams).promise()) );
currentVersionId = data.VersionId.toString();
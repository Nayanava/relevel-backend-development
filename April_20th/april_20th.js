// Important Links
/*
practicing recursion - https://codingbat.com/java/Recursion-1
for-of documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/

/*
https://api.openweathermap.org/data/2.5/weather?
q=kolkata&appid=2d3aa7eb5d3cf4e429f6c85a67e1b355&units=metric
*/

/*
In JSON object we always enclose the keys in double 
quotes
*/
const student = {
    "firstName": "Aditya",
    "lastName": "Raj",
    "age": undefined
}

console.log(student);
/*
we access the properties of a json same as that of a
js object. 
1. .(dot notation)
2. [] - bracket notation
*/
console.log(student["firstName"], student.lastName);

/*
JSON objects have only properties and no methods.
Methods are - functions inside objects.

What can the values of a JSON object property be?
primitive data types and json object
*/

// Create a JSON object containing details of multiple students

const students = {
    "students" : [
        {
            "FirstName" : "Abhishek",
            "lastName": "Dhakad",
            "ContactNumber": "123456789",
            "emailId": "abhishek.dhakad@relevel.com",
            "marks": 300
        },
        {
            "FirstName" : "Abhigyan",
            "lastName": "Patek",
            "ContactNumber": "987654321",
            "emailId": "abhigyan.patek@relevel.com",
            "marks": 354
        },
        {
            "FirstName" : "Rahul",
            "lastName": "Sharma",
            "ContactNumber": "978654321",
            "emailId": "rahul.sharma@relevel.com",
            "marks": 290
        }
    ]
}

console.log(students);

const studentInfo = {
    "firstName": "Samik",
    "lastName": "Sengupta",
    "address": {
        "houseNo": "ABC",
        "apartmentName": "XYZ Apartments",
        "locality": "Kaikhali", 
        "pincode": 700001,
        "landmark": "Near Airport",
    },
    "socialMedia": [
        {
            "description": "twitter",
            "link": "https://twitter.com/samik_sg"
        },
        {
            "description": "linkedin",
            "link": "https://linkedin.com/in/samik_sg"
        }
    ]
}

console.log(studentInfo.firstName);
console.log(studentInfo.socialMedia);

studentInfo.socialMedia.forEach(account => {
     console.log(account["description"] + " : " + account.link);
});

for (let key in studentInfo) {
    console.log(key +" : " + studentInfo[key]);
}

//DIFFERENCE BETWEEN FOR IN AND FOR OF
// I HAD SPOKEN ABOUT ITERABLES - next() and hasNext()
// next() - [nextValue, done] 
// done - true if this is the last element
// else - false

//for - of documentation
//
for(let key of studentInfo.socialMedia) {
    console.log(key.description + " : " + key.link);
}

for( let key of Object.keys(studentInfo)) {
    console.log(key + " : " + studentInfo[key]);
}


//maximum marks obtained in the test
let maxMarks = 0;
for(let student of students.students) {
    maxMarks = max(maxMarks, student.marks);
}

console.log("Maximum marks obtained = " + maxMarks);


function max(a, b) {
    return a > b ? a : b;
}

const maxMarksUsingReduce = students.students
.reduce((maxMarks, currentStudent) => max(maxMarks, currentStudent.marks), 0);

console.log("Max marks using Reduce = " + maxMarksUsingReduce);

/*
We are given a set of products which are of type devices,
these devices will contain informations about laptpo and mobile phones.
We are supposed to print the details of all the laptops
*/
let devices = {
    "Mobiles": [{
        "model": "iphone 13",
        "price": "$ 799"
      },
      {
        "model": "iphone 12",
        "price": "$ 699"
      }
    ],
    "Laptops": [{
        "model": "Mac Air M1",
        "price": "$ 899"
      },
      {
        "model": "Macbook pro m1",
        "price": "$ 1299"
      },
      {
        "model": "Macbook pro 14",
        "price": "$ 1849"
      }
    ]
  };

  for ( let laptop of devices.Laptops) {
      console.log(`The price of ${laptop.model} is ${laptop["price"]}`);
  }

  //Comparing two different objects. Check whether all the keys and values
  // of each of the objects are the same or different.

const aditya = {
    "firstName": "Aditya",
    "lastName": "Raj",
    "_age": 25
}

function isEqual(object1, object2) {
    const keysOfObject1 = Object.keys(object1);
    const keysOfObject2 = Object.keys(object2);
    if(keysOfObject1.length !== keysOfObject2.length) {
        return false;
    }
    return keysOfObject1.reduce((areObjectsSame, currentKey) => {
        console.log(currentKey, object1[currentKey], object2[currentKey])
        return areObjectsSame && 
        object1[currentKey] && 
        object2[currentKey] &&
        object1[currentKey] === object2[currentKey];
    }, true);
}

console.log(isEqual(student, aditya));

/*
length = 3,
what are the possibilities
1. object1 and object2 both have same keys
2. object1 and object2 has at least one different key
*/

//Write a HOF to find cube of a given number,
//use a square function as a callback and then evaluate the cube.

const square = x => x*x;

function cubeOfANumber(callback, x) {
    return callback(x) * x;
}

console.log(cubeOfANumber(square, 5));

//Write a HOF which prints the square of only even numbers
const arr = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers (array) {
    return array.filter(element => element % 2 === 0);
}

function squareEvenNumbers(callback1, array) {
    return callback1(array)
    .map(element => square(element));
}
console.log(squareEvenNumbers(filterEvenNumbers, arr));

//----------Composability---------------
/* 
One function which internally calls multiple other functions
f(n) -> fn1, fn2, ...., fnn
composability -> f(fn1, fn2) => f(n) = fn1(fn2(fn3(n)))
*/

function squareEvenNumbersComposability(evenArray) {
    console.log(evenArray instanceof Array);
    return evenArray.map(ele => square(ele));
}

function sumOfNumbers(numbers) {
    return numbers.reduce((sum, currentNumber) => sum += currentNumber, 0);
}
//2, 4, 6 -> 4 , 16, 36 -> 56

function sumOfSquareOfEvenNumbersComposability(array) {
    const evenArray = filterEvenNumbers(array);
    const squaredEvenNumbers = squareEvenNumbersComposability(evenArray);
    return sumOfNumbers(squaredEvenNumbers);
    //return sumOfNumbers(squareEvenNumbersComposability(filterEvenNumbers(array)));
}

console.log(sumOfSquareOfEvenNumbersComposability(arr));

/*
user information - user table
bus metadata - bus information table

ticket information - busNumber and the seatNumber booked by the userId

in order to display a booking
//--- user table---
1. user full name

//---bus table---
2. travel company
3. bus information-busNumber

//--booking table---
4. date of booking
5. seat number of the booking etc.

*/

//-----------------RECURSION----------------

/*
a function calling itself
recursion - as an onion - an onion is a layer with an onion inside it?
n! = n * (n-1) * (n-2).... * 3 * 2 * 1;
n!= n * (n-1)!
(n-1)! = (n-1)*(n-2)!
.
.
.
2! = 2 * 1!
1! = 1

5! = 5 * 4!
4! = 4 * 3 * 2 * 1 = 24; == 4 * 3!
3 ! = 3 * 2 * 1; == 3 * 2!
2! = 2 * 1

fact(n) = n * fact(n-1);
fact(n-1) = (n-1) * fact(n-2); 
*/

function factorial(n) {
    if(n == 1) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));

// we want to print the sum of digits
//123 = sumOfDigits(12) + 3
//1 + 5 = sumOfDigits(1) + 2
//2 + 3;
//3 + 0;


//1 + sumOfRemainingDigits(23), 2 + sumOfRemainingDigits(3);


function sumOfDigits(number) {
    if(number < 10) {
        return number;
    }
    return sumOfDigits(parseInt(number/10)) + (number % 10);
}

console.log(sumOfDigits(9871));

/*

sumOfDigits(9) 
    | 9
    V
  9 + 8
    | 17
    V
  17 + 7
    | 24
    V
  24 + 1
    |
    V
    25
*/
var globalVariable = 10

function addToGlobalVariable(firstNumber, secondNumber, globalVariable) {
    return firstNumber + secondNumber + globalVariable
}

// for(var i = 1; i <= 5; i++) {
//     console.log(addToGlobalVariable(5, 5, 10) === 20)
//     globalVariable = Math.floor(Math.random() * 10) + 1
// }

var listOfSlicedSandwichIngredients = listOfSandwichIngredients.map(item => slice(item))

var listOfFilteredSandwichIngredients = 
        listOfSlicedSandwichIngredients.filter(item => item === 'Tomatoes')
 //console.log("Things are not working fine")       
var listOfPreparedSandwiches = listOfSlicedSandwichIngredients.reduce(() => prepareTheMagicSandwich())


//When the offer was paid out - when a cashback was given to a customer
var metrics  = {
    "offerId": "OF12345678",
    "timeOfPayout": "12:03:2022 22:18:17",
    "count": 1
}

stopWatch.start()
    //make a call to api.weatherMap.com
stopWatch.stop()

metrics = {
    "apiName": "api.weatherMap.com",
    "tat": stopWatch.elapsedTime,
    "timeOfMetrics" : "2012:03:12 22:40:00"
}
function tryFetchingData(allIssWell) {
    if(allIssWell) {
        return "things are fine"
    }
    throw new Error("Something went wrong");
}

function functionB() {
    try {
        tryFetchingData(false);
    } catch (err) {
       // throw new Error(`tryFetchingData threw -> ${err.message}`);
       console.log("tryFetchingData threw error");
    } finally {
         console.log("this will be executed no matter what!");
    }

}

function functionA() {
    try {
        functionB();
    } catch(err) {
        console.log("functionB threw ", err.message);
    } finally {
        console.log("finally is working inside functionA also");
    }
}

functionA();
const fs = require('fs')
console.log("starting")
const text = fs.readFile("./contents.json", (err, data) => {
    if(err) {
        console.log("Error in reading file")
    } else {
        console.log(new Buffer.from(data).toString())
    }
})
console.log("stopping")
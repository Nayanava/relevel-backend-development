const fs = require('fs')
console.log('Starting application')

fs.readFile("./hello_node.txt", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(new Buffer.from(data).toString())
    }
})
console.log("Stopping application")
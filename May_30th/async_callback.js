const fs = require('fs');
const { parse } = require('path/posix');
fs.readFile("./class_notes.txt", (error, data) => {
    if(error) {
        console.log("Oops error in reading file", error);
    } else {
        console.log(data.toString());
    }
});

const ageOfUsers = (skip, limit) => {
    const ages = [];
    for(let i = skip+1; i <= skip + limit; i++) {
        ages.push(10 + parseInt(Math.random() * 111));
    }
    return ages;
}
const fetchDataFromDB = (skip, limit) => {
    setTimeout(() => {
        const ages = ageOfUsers(0, 10);
        setTimeout(() => {
            ages.concat(ageOfUsers);
            setTimeout(() => {
                
            })
        }, 2000)
    }, 2000)
}


//(9 / 100) + (10/100) != (9 + 10)/20


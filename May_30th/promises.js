// // const fs = require('fs');
// // const readFilePromise = new Promise((resolve, reject) => {
// //     fs.readFile("./class_note.txt", (err, data) => {
// //         if(err) {
// //             reject(err);
// //         } else {
// //             resolve(data.toString());
// //         }
// //     })
// // });
// // //on promise is fulfilled (resolved)
// // readFilePromise.then(result => console.log(result))
// // .catch(err => console.log(err));

// // const { rejects } = require("assert");
// // const { sign } = require("crypto");

// // //1. we are making a call to the database to pull out
// // // the age of the users.
// // //2. and then we are trying to calculate
// // // the average age of the users.

// // const fetchDataFromDB = () => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             reject("error occured");
// //             //resolve([25, 24, 33, 42, 76, 88, 75]);
// //         }, 2000);
// //     });
// // }

// // //console.log(fetchDataFromDB());
// // fetchDataFromDB().then((ageOfUsers) => {
// //     let sum = 0;
// //     for(let age of ageOfUsers) {
// //         sum += age;
// //     }
// //     console.log('average age of users', parseInt(sum/ageOfUsers.length));
// // })
// // .catch((err) => {console.log('Something went wrong', err)});

// //-----------------------------------------------------------------------


// const ageOfUsers = (skip, limit) => {
//     const ages = [];
//     for(let i = skip+1; i <= skip + limit; i++) {
//         ages.push(10 + parseInt(Math.random() * 111));
//     }
//     return ages;
// }

// const fetchDataFromDB = (skip, limit) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(skip < 0) {
//                 reject("Skip must be a positive number or 0");
//             }
//             resolve(ageOfUsers(skip, limit));
//         }, 2000, skip, limit)
//     })
// }

// // // fetchDataFromDB(0, 10).then((ages) => {
// // //     console.log(ages);
// // //     fetchDataFromDB(10, 10).then(ages => {
// // //         console.log(ages);
// // //         fetchDataFromDB(20, 10).then(ages => {
// // //             console.log(ages);
// // //         }).catch(err => console.log(err))
// // //     }).catch(err => console.log(err));
// // // }).catch(err => console.log(err));


// fetchDataFromDB(0, 10).then((ages) => {
//     console.log(ages);
//     return fetchDataFromDB(10, 10);
// }).then((ages) => {
//     console.log(ages);
//     return fetchDataFromDB(-1, 10)
// }).then(ages => console.log(ages))
// .catch((err) => console.log('error', err));


//
//                        onFulfilled                      onFulfilled
//              pending  /           \        pending     /
//  promise     -------->             promise -----------> 
//                       \
//                        onRejected
//
//

//--------------------------Promise.all---------------------------------

/*
1. Once a person places an order - orderId, dateOfOrder, purchaseAmount, productId, adressId, paymentId, orderStatus, shippingId
1.1. product information - catalogue management system, productId - product details
1.2. logistics management system - will provide us with the shipping status of the product
1.3. address of the user will be present in user management system
after 1, (1.1, 1.2, 1.3 - can all happen in parallel)
*/

const bookOrder = {
    orderId: 'OD1234567',
    productId: 'P112233',
    paymentId: 'T20220530221335',
    userId: 'U20170510100010',
    addressId: 'AD1122334455',
    shippingId: 'SH2022053022133600'
}
const fetchOrderFromDB = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(bookOrder);
        }, 2000);
    })
}

const prod = {
    productId: 'P112233',
    name: 'Play On, How to get better with age',
    price: 170,
    description: 'book about fitness'
};

const user = {
    name: 'Nayanava',
    userId: 'U20170510100010',
    address : {
        addressId : 'AD1122334455',
        addressLine1: 'Sarjapur Road',
        pincode: "560035"
    }
}

const fetchInfoFromService = (id, service) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let object;
            switch(service) {
                case 'user':
                    object = user;
                    break;
                case 'product':
                    object = prod;
                    break;
                default:
                    reject('Service is temporarily down');
            }
            resolve(object);
        }, 2000, id, service);
    })
}

// fetchOrderFromDB('OD1234567').then(order => {
//     console.log(order);
//     const promises = [];
//     promises.push(fetchInfoFromService(order.shippingId, 'logistics'));
//     promises.push(fetchInfoFromService(order.productId, 'product'));
//     promises.push(fetchInfoFromService(order.userId, 'user'));
//     return Promise.all(promises);
// }).then((results) => {
//     console.log(results);
// }).catch(err => console.log('error occured: ', err))

// const promises = [];
// promises.push(fetchInfoFromService('P112233', 'product'));
// promises.push(fetchInfoFromService('U20170510100010', 'user'));
// Promise.all(promises).then(results => {
//     console.log(results);
// }).catch(err => console.log('error occured: ', err));

// step 1, 2, 3 is in sync
// step 4 is async
// step 5, 6, 7 needs to make use of the value retrieved from step 4


// we want to consolidate all of the data that we receive from each of the results as well as the order and make use of the same
/*
 orderDetails : {
    orderId: 
    productId: 
    productName:
    userName:
    address:
    productPrice:
    productDescription:
}
*/

const orderDetails = {};
fetchOrderFromDB('OD1234567').then(order => {
    // orderDetails.orderId = order.orderId; - can't be done will throw referenceError
    const promises = [];
    // promises.push(fetchInfoFromService(order.shippingId, 'logistics'));
    promises.push(fetchInfoFromService(order.productId, 'product'));
    promises.push(fetchInfoFromService(order.userId, 'user'));
    return Promise.all(promises);
}).then((results) => {
    for(let result of results) {
        if(result.hasOwnProperty('name')) {
            orderDetails.productName = result.productName;
        }
        if(result.hasOwnProperty('name')) {
            orderDetails.userName = result.userName;
        }
        if(result.hasOwnProperty('description')) {
            orderDetails.productDescription = result.description;
        }
    }
    console.log(orderDetails);
}).catch(err => console.log('error occured: ', err))

//-----------------------Async/Await--------------------------

const doAsyncWork = async () => {
    throw new Error();
    return ('async function');
}

//console.log(doAsyncWork());

// doAsyncWork().then(result => console.log(result))
// .catch(err => console.log("error occured:", err));

 const fetchInfoFromServiceAsync = async (id, service) => {
     return await fetchInfoFromService(id, service);
 }


async function getOrderDetailsAsync(order) {
    const userInfo = await fetchInfoFromServiceAsync('userId', 'user');
    const orderDetails = {
        userName: userInfo.name,
        userId: userInfo.userId,
    }
    console.log(orderDetails);
    const productInfo = await fetchInfoFromServiceAsync('prodId', 'product');
    orderDetails.productId = productInfo.productId,
    orderDetails.productName = productInfo.name,
    orderDetails.description = productInfo.description;
    console.log(orderDetails);
    //const shippingInfo = await fetchInfoFromServiceAsync('shippingId', 'shipping');
    
    return orderDetails;
}

getOrderDetailsAsync(bookOrder).then(orderDetails => console.log(orderDetails)).catch(err => console.log(err));

//We need to find the maximum from a very large set of numbers present in the disk
//We cannot load all of the files at one shot from the disk - use the skip and limit to mimic
//After loading every chunk, find the maximum seen so far and finally log the result. 
//maximum numbers in disk - 400 and everytime we can read only 20 numbers from the disk
// Ex : [10, 20, 30, 40, 10, 11, 12, 15, 18, 20].
// limit - 5 numbers
// output: 40
//use promise chaining as well as async/await

const allPromises = async () => {
    const promises = [];
    promises.push(fetchInfoFromService('P112233', 'product'));
    promises.push(fetchInfoFromService('U20170510100010', 'user'));
    return Promise.all(promises);
}

async function allPromisesAsync() {
    const results = await allPromises();
    for(const result of results) {
        console.log(result);
    }
    return 'proceesed';
}

allPromisesAsync().then((result) => {
    console.log(result)
}).catch(err => console.log(err));
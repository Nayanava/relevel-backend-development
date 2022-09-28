const HashTable = require("./HashTable");

const hashTable = new HashTable();

const inputArray = [
    ["set", "testKey1", "testValue1"], 
    ["set", "testKey2", "testValue2"],
    ["set", "testKey3", "testValue3"],
    ["get" , "testKey3"],
    ["set", "tsetKey3", "tsetValue3"],
    ["set", "testKey3", "updatedTestValue3"],
    ["get" , "testKey4"],
    ["get" , "testKey3"],
    ["get" , "tsetKey3"],
    ["delete" , "testKey3"],
    ["get" , "testKey3"],
    ["get" , "tsetKey3"],
    ["get" , "testKey1"],
];

const testHashTable = (inputArr) => {
    for(const arr of inputArr) {
        switch(arr[0]) {
            case "set":
                hashTable.set(arr[1], arr[2]);
                break;
            case "get":
                const result = hashTable.get(arr[1]);
                result ? console.log(`${arr[1]} : ${result}`) : 
                    console.log(`key ${arr[1]} is not present`);
                break;
            case "delete":
                hashTable.delete(arr[1]);
                break;
            default:
                throw Error("Invalid Operation on Hashtable");
        }
    }
}

testHashTable(inputArray);
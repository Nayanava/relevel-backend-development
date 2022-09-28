class HashTable {
    constructor() {
        this.hashTable = new Array(2);
        this.tableSize = 0;
        this.LOAD_FACTOR = .75;
        this.elementCount = 0;
    }

    /*
    1. insert - set
    2. search - get
    3. delete - delete
    */
    set(key, value) {
        this._set(key, value, this.hashTable);
    }
    _set(key, value, hashTbl) {
        const index = this._fetchIndex(key, hashTbl.length);
        if(!hashTbl[index] || !hashTbl[index].length) {
            hashTbl[index] = [];
        }
        for(let i = 0; i < hashTbl[index].length; i++) {
            if(hashTbl[index][i][0] === key) {
                hashTbl[index][i][1] = value;
                return;
            }
        }
        hashTbl[index].push([key, value]);
        if(++this.elementCount / hashTbl.length >= this.LOAD_FACTOR) {
            this.elementCount = 0;
            this._rehash();
        }
    }
    get(key) {
        const index = this._fetchIndex(key, this.hashTable.length);
        if(!this.hashTable[index] || !this.hashTable[index].length) {
            return this.hashTable[index];
        }
        for(const keyValuePair of this.hashTable[index]) {
            if(key === keyValuePair[0]) {
                return keyValuePair[1];
            }
        }
        return undefined;
    }

    delete(key) {
        const index = this._fetchIndex(key, this.hashTable.length);
        this.elementCount--;
        for(let i = 0; i < this.hashTable[index].length; i++) {
            if(this.hashTable[index][i][0] === key) {
                this.hashTable[index].splice(i, 1);
                break;
            }
        }
        if(!this.hashTable[index].length) {
            this.hashTable.splice(index, 1);
        }
    }

    _fetchIndex(key, length) {
        const hash = this._hash(key);
        return hash % length;
    }

    //- string, it extracts the ascii code of each of the characters in the string
    _hash(key) {
        let hash = 0;
        for(let character of key) {
            hash = hash * 31 + character.charCodeAt();
        }
        return hash;
    }
// abc -> 1*10 + 2 = 12 => 12*10 + 3 = 123
// abc -> 1 + 2 + 3 = 6, in any order it will be 6, 3 + 1 + 2 or 3 + 2 + 1
//bac -> (2*10 + 1) * 10 + 3 = 213, bca = 231, cba = 321, cab = 312
    _rehash() {
        //1. take a temporary pointer which points to the current hashmap
        // and initialize this.hashMap with double the current hashMap size, and start inserting values into the current hashMap
        //(2 is better approach specially for multithreaded env)
        //2. take a temporary hashMap and init it to double the size of the current hashmap
        //insert the values in to the temporary hashMap. Finally make the this.hashMap point to 
        //the temporary hashMap.

        const tempTable = new Array(this.hashTable.length * 2);
        for(const keyValuePairs of this.hashTable) {
            if(!keyValuePairs) {continue;}
            for(const keyValuePair of keyValuePairs) {
                this._set(keyValuePair[0], keyValuePair[1], tempTable);
            }
        }
        this.hashTable = tempTable;
    }
}

module.exports = HashTable;
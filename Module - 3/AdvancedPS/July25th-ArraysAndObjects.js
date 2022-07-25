/*

Given two strings. 
You need to find if they are anagrams of each other. 
For example – Input – "silent", "listenn"
"talent" and "latent" 

arr1[20] = 2,
arr1[0] = 1,
arr1[11] = 1,
arr1[4] = 1,
arr1[13] = 1,

arr2[11] = 1,
arr2[0] = 1,
arr2[20] = 2,
arr2[4] = 1,
arr2[11] = 1,

for loop from 0 to 25
    if(arr1[i] !== arr2[i]) {
        return false;
    }
return true;

if I use an array of size 26
256, 

arr and say size = 26 then - a indicates 0, b indicates - 1.... z - 25
arr and say size = 128 then - a indicate 97, b - 98, 
arr['a'] 
'a' - 'a' = 0
'b' - 'a' = 1
'c' - 'a' = 2

if i is the index position of a character in a string.
silent 
then arr[str[i] - 'a'] += 1

*/

function areAnagrams(string1, string2) {
    if(string1.length !== string2.length) {
        return false;
    }
    const freqArr = [];

    initFrequencyArrays(freqArr);
    //initFrequencyArrays(freqArrStr2);

    for(let character of string1) {
        freqArr[character.charCodeAt() - "a".charCodeAt()] += 1;
    }
    for(let character of string2) {
        freqArr[character.charCodeAt() - "a".charCodeAt()] -= 1;
    }

    for(let i = 0; i < 26; i++) {
        if(freqArr[i] !== 0) {
            return false;
        }
    }
    return true;
}

function initFrequencyArrays(arr) {
    for(let i = 0; i < 26; i++) {
        arr[i] = 0;
    }
}

console.log(areAnagrams('latent', 'talent'));

/*
Problem 1 – Given an array of strings. You need to print all anagrams together. 
For example – Input – {"data", "atad", "number", "tada", "adat", "bernum"}
Output – {"data", "atad", "tada", "adat", "number", "bernum"}
arrays of arrays - [["data", "atad", "tada", "adat"], ["number", "bernum"]]
                   {"data", "atad", "number", "tada", "adat", "bernum"}
sorted this copy - {"aadt" - 0, "aadt" - 1, "bemnru" - 2, "aadt" - 3, "aadt"- 4, "bemnru"- 5}
we sort the array - {"aadt" - 0, "aadt" - 1, "aadt" - 3, "aadt"- 4, "bemnru" - 2, "bemnru"- 5}

[["data", "atad", "tada", "adat"], ["number", "bernum"]]




Approach 1:-
let's sort the strings individually
- [{
    sortedString: "aadt",
    originalString: "data"
    }, {
    sortedString: "aadt",
    originalString: "atad",
    }, {
    sortedString: "bemnru",
    originalString: "number",
    },{
    sortedString: "aadt",
    originalString: "tada"
    } "aadt", "bemnru"]
- Sort the array lexicographically
- ["aadt", "aadt", "aadt", "aadt", "bemnru", "bemnru"]
-[["aadt", "aadt", "aadt", "aadt"], ["bemnru", "bemnru"]]

- imagining that length of the array of strings is N
- and length of each string is M
- what is the complexity??
    1. we sorted the individual strings - TC(sort each string) - O(n*mlogm)
    2. we sort the elements of the array - 
        m*O(nlogn)
    Overall time complexity - O(m*nlogn + n*mlogm)
- space complexity??
    O(n * m)

Approach 2:-
    1. first let's find the frequency of each string.
    2. we create a map which takes a string as a key
        what is this string?? - we created a frequency array - what if we construct a string
        with the values of the frequency array??

        
        abacd
        arr - [2, 1, 1, 1, 0, 0, 0, 0, 0, 0]
        string - 2_1_1_1_0_0_0_0_0_0_ - 26
        
        abbca
        arr - [2, 2, 1, 0, 0, 0, 0, 0, 0, 0]
        string - 2_2_1_0_0_0_0_0_0_0_
*/

const getFreqString = (arr) => {
    let str = '';
    for(let integer of arr) {
        str += integer;
        str += '_';
    }
    return str;
}

const getFreqArr = (str) => {
    const freqArr = new Array(26).fill(0);
    for(let character of str) {
        freqArr[character.charCodeAt() - "a".charCodeAt()] += 1;
    }
    return freqArr;
}

const groupAnagrams = (arrOfWords) => {
    const map = new Map();
    for(let word of arrOfWords) {
        const freqArr = getFreqArr(word);
        const freqString = getFreqString(freqArr);
        if(!map.has(freqString)) {
            map.set(freqString, new Array());
        }
        map.get(freqString).push(word);
    }

    const resultArr = [];
    for(const [key, value] of map) {
        resultArr.push(value);
    }
    return resultArr;
}

console.log(groupAnagrams(["data", "atad", "number", "tada", "adat", "bernum"]));

/*
Non-repeating – A character is known as a non-repeating character when its frequency
is unit in a given string.
Problem – Given a string. You need to print the first non-repeating character. 
For example – 
Input – str = “unacademy”
Output – u

abcdefghijklmnoonmlkjihgfedcba 
(n-1), (n-2), (n-3).... (n/2)

n + (n-1) + (n-2).....1 = n*(n+1)/2
(n/2)*((n/2)+1)) / 2
n*(n+2)/8 = O(n^2)

[2, 2, 2, 2, 2, 2, ...... 2] 

*/

const findFirstNonrepeatingCharacter = (word) => {
    const freqArr = new Array(26).fill(0);
    for(let character of word) {
        freqArr[character.charCodeAt() - "a".charCodeAt()]++;
    }
    for(let character of word) {
        if(freqArr[character.charCodeAt() - "a".charCodeAt()] === 1) {
            return character;
        }
    }
    return "";
}

console.log(findFirstNonrepeatingCharacter("unacademy"));
console.log(findFirstNonrepeatingCharacter("abcdefghijklmnoonmlkjihgfedcba"));


/*
Subarray with sum 0 – A subarray in a given array having a sum equal to 0.
Problem – Given an array having positive and negative numbers. 
You need to find a subarray having a sum of 0. For example –
Input – {0, 2, 4, -1, -3, 4, -5, 5}
      - {0, 2, 6,  5,  2, 6,  1, 6}
Output –
Index 2 to 4, 3 to 5, Index 6 to 7

1st possibility is that the overall sum is 0. ex - {1, 2, 3, -2, -2, -2}
2nd possibility is that sum starting from the 0th index 
to some index let's say 'i' in the array is 0. ex - {1, 2, 3, -6, 3, 4, 5}

3rd possibility is that the sum of some subArray 
not starting from the 0th index position is 0. ex - {0, 2, 4, -1, -3, 4, -5, 5}

map - 0 - 1,
    - 2 - 2,
    - 6 - 2,
    - 5 - 1,
    - 1 - 1
 1st 0,  2nd 0, 3rd 0 and 4th 0
 2 to 4, 3 to 5, 6 to 7, 3 to 7

*/

const countSubArraySumZero = (arr) => {
    const map = new Map();
    let sum = 0, count = 0;
    map.set(0, 1);
    for( let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(map.has(sum)) {
            count += map.get(sum);
        }
        else {
            map.set(sum, 0);
        }
        map.set(sum, map.get(sum)+1);
    }
    return count;
}

console.log(countSubArraySumZero([0, 2, 4, -1, -3, 4, -5, 5]));

// subarray sum equal to some value K - countSubarraySumEqualToK(arr, K);

/* Homework.
Problem – Given an array. You need to swap (no relative ordering) negative elements to the end of an array.
For example – Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }
*/
/*
Problem – Given an array. You need to shift(maintain relative ordering) negative elements to the end of an array.
For example – Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }
*/
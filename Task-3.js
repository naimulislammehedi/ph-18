// Write a function to count the number of vowels in a string.

// const { jsx } = require("react/jsx-runtime");

function countVowels(str, vowels) {
    let count = 0; 

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])){
            count++; 
        } 
    }
    return count; 

    // console.log("Hi"); 
}

const string = "Hello, World!"; 
const vowlsChar = "AEIOUaeiou"; 

console.log(countVowels(string, vowlsChar)); 
/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function findLongestWord(str) {
    // 1. Split the string into an array of words
    const words = str.split(' ');
    let longestWord = "";

    // 2. Iterate through the array
    for (let i = 0; i < words.length; i++) {
        // 3. Compare the current word's length with the longest found so far
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

const input = "I am learning Programming to become a programmer";
console.log(findLongestWord(input)); // Output: Programming
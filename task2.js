/*
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function countOccurrences(numbers, find) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find) {
            count++;
        }
    }

    return count;
}

// Example 1
const numbers1 = [5, 6, 11, 12, 98, 5];
const find1 = 5;
console.log(countOccurrences(numbers1, find1)); // Output: 2

// Example 2
const numbers2 = [5, 6, 11, 12, 98, 5];
const find2 = 25;
console.log(countOccurrences(numbers2, find2)); // Output: 0
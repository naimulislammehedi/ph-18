// Generate a random number between 10 to 20.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

console.log(randomNumber(10, 20)); 
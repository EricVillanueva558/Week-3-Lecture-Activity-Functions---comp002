function greet(name) {
    return `Hello, ${name}!`;
}

// Test the greet function
console.log(greet("Eric"));


function circumference(diameter) {
    const pi = Math.PI;
    return pi * diameter;
}

// Test the circumference function
console.log(circumference(10));


function firstFunction() {
    console.log("This is the first function.");
    
    secondFunction();

    console.log("Back in the first function.");
}

function secondFunction() {
    console.log("This is the second function.");
}

firstFunction();

function overflow() {
    return overflow(); // Recursive call without a base case
}

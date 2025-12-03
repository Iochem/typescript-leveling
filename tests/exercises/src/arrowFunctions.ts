// ======================================================
// Arrow functions
// ======================================================


// Demonstrates average, addition and subtraction with typed parameters.
const average = (num1: number, num2: number): number => {
    return (num1 + num2)/ 2;
};
const add = (a: number, b: number): number => {
    return a + b;
}
const subtract = (num1: number, num2: number): number => {
    return num1 - num2;
};

console.log(average(33.2 , 44.5));
console.log(add( 33.2 , 44.5));
console.log(subtract(33.2 , 44.5));


/*
- Structure (estrutura):
const nameFunction = (varName: varType): ReturnType =>  {
  // Function body
}

Use arrow functions for:
- small utility functions
- callbacks
- avoiding 'this' issues
 */



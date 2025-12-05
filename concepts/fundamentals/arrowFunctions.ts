// ======================================================
// Arrow Functions
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

// Implicit return (useful for short operations)
const double = (n: number) => n * 2;
console.log("\n" + double(10));

// Marks the file as a module to avoid global scope conflicts.
export {};

/*
- Structure (estrutura):
const nameFunction = (varName: varType): ReturnType =>  {
  // Function body
}

Use arrow functions for:
- Small utility functions
- Callbacks
- Avoiding 'this' issues
- Array methods (map, filter, reduce)

When not to use arrow functions:
- Object methods that require a dynamic 'this'
- Class methods
- Functions that need to be used as constructor (arrow functions cannot be used with 'new')
- When you need to call the function before its declaration

 */


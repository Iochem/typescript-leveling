
// ======================================================
// Variable Declarations
// ======================================================

// You can annotate the type (optional TypeScript do type inference )
const varName: string = "hello";

// Use `let` when you need to change the value.
let score = 0;
score = 10;    // ✅ ok
score += 5;    // ✅ ok

// Use `const` when you don't need to change the value.
const age = 20; // Immutability
//age = 16; // ❌ error! You can't change it

console.log(score + ", " + age);


// ===== Good Practices  =====

// Prefer const — safer
const port = 3000;

// Use let only when the value changes
let counter = 0;
counter++;

// Use camelCase in common variables
let userAge = 20;

export {};

/*
- structure(estrutura):
varKey varName = value;

Notes:
-  It´s can annotate the type:
varKey varName: varType = value;

- TypeScript do type inference, so the primitive type annotation are often unnecessary.
 */

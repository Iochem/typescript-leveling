// ======================================================
// Type Alias
// ======================================================


// ----- Union Types -----

// Using us a variable type (Unions type to status)
type Status = "success" | "error" | "loading";

let requestStatus: Status;

requestStatus = "loading"; // OK
requestStatus = "success"; // OK
requestStatus = "error";   // OK
//requestStatus = "done";    // ❌ Error - 'done' doesn't existe in the type


// ----- Type with Functions -----

// Can be used with function
// To guarantee that all functions have same signature
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;
const subtract: MathOperation = (x, y) => x - y;

// Using the functions
console.log("Add:", add(5, 3));           // 8
console.log("Multiply:", multiply(5, 3)); // 15
console.log("Subtract:", subtract(5, 3)); // 2


export {};

/*
When to use Type:
- union types (|)
- Tuples and
- Intersection types(&)
- To create reusable types
- Functions signatures and object shapes
- Literal types (string, number, boolean literals)
- Reusing functions signatures and methods (To define the contracts)

 */
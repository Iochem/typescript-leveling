// ======================================================
// Interfaces
// ======================================================

// Interfaces define the *shape* (structure) of an object.
// Use PascalCase when naming interfaces.
interface CreateUser {
    id: number;
    age: number;
    isActive: boolean;
}

const user: CreateUser = {
    id : 1355,
    // age: "19", // ❌ error!
    age:25,
    isActive: true
}
console.log(user);


// ===== Optional Properties =====

// Use `?` when a property is not always required.
interface Product {
    id: number;
    title: string;
    price?: number; // optional
}

// Usage examples
const productA: Product = {
    id: 1,
    title: "Laptop",
};

console.log(productA);

export {};

/*
- Structure(estrutura):
interface InterfaceName {
    key: type;

Notes:
- Interfaces are not converted to JavaScript—they.
 */
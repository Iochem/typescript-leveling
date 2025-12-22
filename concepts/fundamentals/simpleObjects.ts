// ======================================================
// Simple Objects
// ======================================================

// Objects are structures that group related data using key-value pairs

// ===== Untyped objects =====
const person=  {  //it's reusable
    name: "Person1",
    age: 30,
}

console.log(person.name); // Accessing object property
console.log(person.age);

/*
Keys: name and age
Values: "Person1" and 30
 */


// ===== Typed Objects =====

const users: { name: string; age: number } = { // Is not reusable
    name: "user",
    age: 20
}; // It already guarantees structure and types.


// ===== Objects with Type Alias =====

// A type alias allows you to create a reusable object shape
// Now we can reuse the User type to type multiple objects
type User = {
    name: string;
    age: number;
};

const user1: User = {
    name: "User1",
    age: 20
};

const user2: User = {
    name: "User2",
    age: 25
};

console.log("\n");
console.log(user1);
console.log(user2);

// OBS: Commonly used for simple data objects

export{};

/*
 Use simple objects for representy:
 - Users
 - Products
 - Configs
 - ny entity with multiple attributes

 Objects represent data structures with nomead properties

 */
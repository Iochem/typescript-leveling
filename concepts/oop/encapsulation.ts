
// ======================================================
// Encapsulation
// ======================================================

// Exposes only what matters
// Prevents invalid states

class User {  // Form for construct objects
    private age: number; //Private - Protect atributes

    // Creates a valid object
    constructor(age: number) { // Validation
        if (age < 0) {
            throw new Error("Age invalid");
        }
        this.age = age;
    }

    // Getter - It is a property with behavior.
    getAge() { // Displays a value without exposing the field.
        return this.age;
    }

    // Behavior that changes internal state
    haveBirthday() { //action
        this.age++;
    }
}

const user = new User(20);

user.haveBirthday(); // ok
console.log(user.getAge()); // 21

//user.age = -5; // ❌ error: age is private



export{};

/*
private → encapsulation (data protection)
Classes are commonly used for: Validation, services, repositories, managers
- When you don't have theses, to create obects should if use 'types'

If there is no behavior (only data),
prefer using types or interfaces.

OOP makes sense when objects have behavior.

 */





// ======================================================
// Inheritance
// ======================================================


// Base (parent) class
class User {
    // Protected - Accessible inside this class and its subclasses
    protected name: string;
    protected email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getProfile() {
        return {
            name: this.name,
            email: this.email
        };
    }
}

//Child class
class Admin extends User {
    // // private: Only Admin can access this
    private permissions: string[];

    constructor(name: string, email: string, permissions: string[]) {
        super(name, email); //Call the constructor of father class
        this.permissions = permissions;
    }

    hasPermission(permission: string) {
        return this.permissions.includes(permission);
    }
}

// Usage
const admin = new Admin(
    "Ana",
    "ana@email.com",
    ["CREATE_USER", "DELETE_USER"]
);

// Inherited method from User
console.log(admin.getProfile()); // Inherited method
// Method defined in Admin
console.log(admin.hasPermission("CREATE_USER")); // own method


export {};
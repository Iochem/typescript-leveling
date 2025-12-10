// ======================================================
//Mini Project — Simple User Register
// ======================================================

// User  interface
interface User {
    id : number;
    name: string;
    age: number;
}

//Array
const users: User[] = [];

// Var that controls the next ID
let nextId = 1;

// Function to add users in the array
function addUser(name: string, age: number){
    const newUser : User = {
        id : nextId ++,
        name,
        age
    };
    users.push(newUser);
}

addUser("User1", 19);
addUser("User2", 23);
addUser("User3", 15);
addUser("User4", 14);

//'forEach'
users.forEach(print => {console.log(print)});
//Or
users.forEach(print => {console.log("id: " + print.id + ", name: " + print.name + ", age: " + print.age)});

// Function to count the total number of users
function totalUsers(users: User[]){
    console.log("\nTotal users: " + users.length);
}
totalUsers(users);

//Function to classify users as adults or minors
function ageUsers(users: User[]){
    console.log("\n- " + "Age Classification:");

    users.forEach(user =>{
        if(user.age > 18){
            console.log(user.name + " is an adult");

        }else{
            console.log(user.name + " is an minor");
        }
    })
}

ageUsers(users);



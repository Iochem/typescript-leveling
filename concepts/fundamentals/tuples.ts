// ======================================================
// Tuples
// ======================================================

// Tuples -> Typed array

// Tuples can use 'type'
type Coordinate = [number, number];
const point: Coordinate = [10, 20];

// Nomead tuples
type Calendar = [day: number, month: number, year: number];

const date: Calendar = [13, 5, 2005];
console.log("Day: " + date[0]); //Acess by indice
console.log("Month: " + date[1]);
console.log("Year: " + date[2]);


//----- without to use 'type' -----
function getCoordinates(): [number, number] {
    return [10, 20];
}

const [x, y] = getCoordinates();

console.log("X:", x);
console.log("Y:", y);

//Other example
const user: [number, string] = [1, "User1"];
console.log(user[0]); // 1
console.log(user[1]); //User1

export {};

/*
characteristics of tuples:
- Format: [type1, type2,...]
- It has a predefined size and specific type.
- Each index has a specific type
- Use tupla with type to reuse te sames structure
 */

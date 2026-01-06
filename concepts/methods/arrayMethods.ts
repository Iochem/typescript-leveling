// ======================================================
// Array Methods
// ======================================================

// ===== Manipulating Arrays =====

const arrayNum : number[] = [5,6,7,6,8];

// find() - Returns the first element that satisfies the condition
const searchNum = arrayNum.find(num => num > 5);
console.log(searchNum); //6
//OBS: find() returns only one element or undefined

// loop through each array item and print
arrayNum.forEach(value => console.log(value));

// Print all items that satisfies the condition (> 6)
arrayNum.forEach(value => {
    if(value > 6){
        console.log(value);
    }
})

//Pop() - Removes the last element from the array (mutates the array)
arrayNum.pop();
console.log("\nResult:", arrayNum); // 5,6,7,6


// ===== Map() =====

// Applies transformations to each item and returns a new array
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log("\n" + doubled); // 2, 4, 6

// This method doesn't alter the original array


// ===== filter() =====

// Creates a new array with elements that satisfy the condition
const arrayNumber = [1, 2, 3, 4];
const newA = arrayNumber.filter(num => num % 2 === 0 );
console.log("\n" + newA);// 2, 4

//This also doesn´t alter the original array


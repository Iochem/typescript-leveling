// ======================================================
// Arrays
// ======================================================

//Usually a list of values(or objects)
const num = [1,2,3,7];
console.log(num);

//Data is accessed by index (indexes always start at zero).
console.log(num[0]); // 1

//How many elements the array has
console.log(num.length);//4

//Add an element in final position
num.push(5);
console.log(num); // 1,2,3,7,5


// ===== Other ways to declare arrays: =====

//In this arrays should only contain declared type:
const arrayNumber: number[] = [1,2,3,4];

const arrayNumber2: Array<number> = [1,2,3,4]; //Diamond operators


// ===== Manipulating Arrays =====

const arrayNum : number[] = [5,6,7,6,8];

// Returns the first element that satisfies the condition
const searchNum = arrayNum.find(num => num > 5);
console.log(searchNum); //6

// loop through each array item and print
arrayNum.forEach(value => console.log(value));

// Print all items that satisfies the condition (> 6)
arrayNum.forEach(value => {
    if(value > 6){
        console.log( + value);
    }
})

export {};

/*
- const arrayName: [];
When you don't need clarify the type
- Prefer explicitly typing arrays when the content should follow a rule.
For exemple: An array going to recibe a CPF list, It's need contain only numbers

 */
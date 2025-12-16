// =====================================
// Mini Project — Number Checker
// =====================================

// Stores the total count of even numbers
let evenNumbers = 0;
// Stores the total count of odd numbers
let oddNumbers = 0;

let invalidNumbers = 0

// Checks whether a number is valid, even or odd
function checker (num: number) {

    // Validation: Only integer numbers are allowed
    if (!Number.isInteger(num)) {
        invalidNumbers++;
        return num + ": Is invalid number. Please enter an integer value.";
    }

    // Validation: Negative numbers are not allowed
    if(num < 0){
        invalidNumbers++;
        return num + ": Negative numbers are not allowed."
    }

    // Edge case: zero
    if (num === 0) {
        invalidNumbers++;
        return "0: is neither even nor odd.";
    }

    //Vaidation: Numbers are even or odd
    if(num % 2 === 0){
        evenNumbers++;
        return num + ": Is even.";
    } else {
        oddNumbers++;
        return num + ": Is odd.";
    }
}

// Testing the function
console.log(checker(4)); //Even
console.log(checker(5)); //Odd
console.log(checker(10)); //Even
console.log(checker(9)); //Odd
console.log(checker(9.5)); //Invalid
console.log(checker(10.5)); //Invalid
console.log(checker(0)); // edge case
console.log(checker(-3)); // negative


console.log("\nTotal even numbers: " + evenNumbers);
console.log("Total odd numbers: " + oddNumbers);
console.log("Total invalid numbers: " + invalidNumbers);


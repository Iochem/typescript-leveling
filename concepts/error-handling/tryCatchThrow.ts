// ======================================================
// Try and Catch with Thorow
// ======================================================


function division (a: number, b: number){
    if(b === 0){
        // Creates and throws the error - Validation the business + Error detection
        throw new Error("To Divide by zero is impossible"); // This error would not exist if it were not explicitly created
    }
    return a / b;
}

// Executes code that may throw an error
try{
    const result = division(20,0);
    console.log(result);

// To prevent the application from crashing
} catch(error){ //Identify and receive the error type
    if (error instanceof Error) {
        console.log(error.message);
    }
}


/*
when throw used:
- Invalid business rules
- Impossible states
- Inconsistent or unexpected data
 */

/*
when without throw used:
- To acess data that may not exist
- Runtime error
- Call something wrong
 */

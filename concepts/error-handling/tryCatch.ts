// ======================================================
// Try and Catch (without 'throw')
// ======================================================

// Try and catch - It serves to capture errors that occurred at runtime.

try { // To prevent the application from crashing if an error occurs.
    const list = ["a", "b"];
    console.log(list[5].toLowerCase()); //This position does not exist
} catch { // Deciding what to do when something goes wrong
    console.log("Invalid array access");
}

try {
    const user = {};
    //console.log(user.name.toUpperCase()); // This property does not exist
} catch {
    console.log("Property does not exist");
}

/*
Try: Block where you place code that may cause runtime errors.
Catch: Block that captures errors thrown inside the try block.

structure(Estrutura):
try {
  // Code, if that can fail
} catch (error) {
  // What to do if fail
}
 */


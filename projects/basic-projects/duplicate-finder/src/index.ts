// ======================================================
// Mini Project — Duplicate Finder
// ======================================================

//Mini project to "identify duplicate elements

function duplicate(num: number[]) {
    const duplicates: number[] = [];
    let hasDuplicate = false;

    //Loops through each element
    for (let i = 0; i < num.length; i++) {
        const rest = num.slice(i + 1) //Take the next elements to comparison

        // Check for duplicate numbers
        if (rest.includes(num[i])) {
            // Check if the array of duplicates already contains this number
            if (!duplicates.includes(num[i])) {
                duplicates.push(num[i]);
            }
            hasDuplicate = true;
        }
    }
    return {
        hasDuplicate, //Return duplicate elements
        duplicates // Return true or false
    }
}

console.log(duplicate([1,2,1,5,7,5,5])); //true → duplicates: 1, 5
console.log(duplicate([1,2,9,5,7])); //False
console.log(duplicate([2,9,1,5,7,3,9])); //true → duplicates: 9


/*
.slice() - Creates a new array with the elements after the given index
.includes() - Checks if the array contains a specific value
.length – Gets the total number of elements in the array and controls the loop iteration
 */

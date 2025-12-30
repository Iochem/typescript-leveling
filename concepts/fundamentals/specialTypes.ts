// ======================================================
// Special Types
// ======================================================

// ===== Any =====

let value: any = 10;
value = "text";
value = value.toUpperCase(); // ❌ TypeScript doesn't complain
console.log(value);


// ===== Unknown =====

let unknownValue: unknown = "hello";
if (typeof unknownValue === "string") { // typeOf - Returns the type of a variable at runtime.
    const upper = unknownValue.toUpperCase(); // ✅ It's safe
    console.log(upper);
} else {
    console.log("The value is not a string");
}
// OBS: It's better to use 'unknown' instead of 'any'


// ===== Void =====
function logMessage(msg: string): void {
    console.log(msg);
}


export {};

/*
any - Disables the type Check (unsafe)
unknown - Used when the type is not known yet (requires type checking)
void - Used when functions don't return values
 */
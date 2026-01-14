
// ======================================================
// Composition
// ======================================================


// To use behavior(methods) and responsibility from other classes
//Responsibility separation
// HAS-A relationship, not IS-A

class Calculator {
    sum(a: number, b: number): number {
        return a + b
    }
}

// Calculate HAS a Calculator and delegates the calculation to it
class Calculate {
    private calculator = new Calculator();

    total(a: number, b: number){
        return this.calculator.sum(a, b);
    }
}
const calc = new Calculate();
console.log(calc.total(10, 20));

// Composition - When a class depends on other classes to concludes its responsibility


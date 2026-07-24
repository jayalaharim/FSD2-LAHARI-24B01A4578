namespace Calculator {

    export function sum(x: number, y: number): number {
        return x + y;
    }

    export function difference(x: number, y: number): number {
        return x - y;
    }

    export function product(x: number, y: number): number {
        return x * y;
    }

    export function quotient(x: number, y: number): number {
        return x / y;
    }
}

console.log("Sum:", Calculator.sum(18, 7));
console.log("Difference:", Calculator.difference(40, 15));
console.log("Product:", Calculator.product(9, 8));
console.log("Quotient:", Calculator.quotient(64, 8));
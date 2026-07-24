let firstNum = 24;
let secondNum = 36;

let num1 = firstNum;
let num2 = secondNum;

while (secondNum !== 0) {
    let remainder = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = remainder;
}

console.log("Greatest Common Divisor =", firstNum);
console.log("Least Common Multiple =", (num1 * num2) / firstNum);
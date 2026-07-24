let number = 28;
let divisorSum = 0;

for (let divisor = 1; divisor <= number / 2; divisor++) {
    if (number % divisor === 0) {
        divisorSum += divisor;
    }
}

console.log(divisorSum === number ? "Perfect Number" : "Not a Perfect Number");
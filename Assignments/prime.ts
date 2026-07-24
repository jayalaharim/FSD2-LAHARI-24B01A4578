let number = 29;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
}

for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Prime Number" : "Not a Prime Number");
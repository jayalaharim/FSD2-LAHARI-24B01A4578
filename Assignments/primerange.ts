let lowerLimit = 20;
let upperLimit = 80;

for (let currentNumber = lowerLimit; currentNumber <= upperLimit; currentNumber++) {
    let isPrimeNumber = true;

    if (currentNumber < 2) {
        continue;
    }

    for (let divisor = 2; divisor <= Math.sqrt(currentNumber); divisor++) {
        if (currentNumber % divisor === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber) {
        console.log(currentNumber);
    }
}
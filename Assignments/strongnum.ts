let number = 656;
let value = number;
let total = 0;

while (value > 0) {
    let digit = value % 10;
    let factorial = 1;

    for (let count = 1; count <= digit; count++) {
        factorial *= count;
    }

    total += factorial;
    value = Math.floor(value / 10);
}

console.log(total == number ? "Strong" : "Not Strong");
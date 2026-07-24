let values = [45, 82, 17, 91, 63];

let maxValue = values[0]!;
let secondMax = values[0]!;

for (let index = 0; index < values.length; index++) {

    if (values[index]! > maxValue) {
        secondMax = maxValue;
        maxValue = values[index]!;
    }
    else if (values[index]! > secondMax && values[index]! !== maxValue) {
        secondMax = values[index]!;
    }
}

console.log("Second Largest Element =", secondMax);
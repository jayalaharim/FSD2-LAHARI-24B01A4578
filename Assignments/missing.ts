let values = [1, 2, 4, 5, 6];
let size = 6;
let currentSum = 0;

for (let index = 0; index < values.length; index++) {
    currentSum += values[index];
}

let expectedSum = (size * (size + 1)) / 2;

console.log("Missing Value =", expectedSum - currentSum);
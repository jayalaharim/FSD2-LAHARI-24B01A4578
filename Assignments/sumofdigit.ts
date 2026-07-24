let value = 7265;
let copy = value;
let sum = 0;

while (copy > 0) {
    let remainder = copy % 10;
    sum += remainder;
    copy = Math.floor(copy / 10);
}

console.log("Sum of Digits =", sum);
let numbers = [25, 30, 35, 40, 45];
let rotations = 3;

for (let count = 0; count < rotations; count++) {
    let firstElement = numbers.shift();
    numbers.push(firstElement!);
}

console.log(numbers);
let numbers = [5, 7, 3, 5, 8, 7, 1];

console.log("Duplicate Values:");

for (let first = 0; first < numbers.length; first++) {
    let found = false;

    for (let second = 0; second < first; second++) {
        if (numbers[first] === numbers[second]) {
            found = true;
        }
    }

    if (found) {
        continue;
    }

    for (let next = first + 1; next < numbers.length; next++) {
        if (numbers[first] === numbers[next]) {
            console.log(numbers[first]);
            break;
        }
    }
}
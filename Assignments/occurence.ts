let numbers = [5, 7, 5, 3, 8, 7, 5];

for (let current = 0; current < numbers.length; current++) {
    let frequency = 1;

    for (let next = current + 1; next < numbers.length; next++) {
        if (numbers[current] === numbers[next]) {
            frequency++;
        }
    }

    let alreadyPrinted = false;

    for (let previous = 0; previous < current; previous++) {
        if (numbers[current] === numbers[previous]) {
            alreadyPrinted = true;
        }
    }

    if (!alreadyPrinted) {
        console.log(numbers[current] + " = " + frequency);
    }
}
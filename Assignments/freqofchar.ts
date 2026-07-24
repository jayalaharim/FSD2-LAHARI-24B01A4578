let text = "TypeScript";

for (let index = 0; index < text.length; index++) {
    let frequency = 1;

    for (let next = index + 1; next < text.length; next++) {
        if (text[index] === text[next]) {
            frequency++;
        }
    }

    let alreadyCounted = false;

    for (let previous = 0; previous < index; previous++) {
        if (text[index] === text[previous]) {
            alreadyCounted = true;
        }
    }

    if (!alreadyCounted) {
        console.log(text[index] + " : " + frequency);
    }
}
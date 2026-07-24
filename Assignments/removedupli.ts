let text = "Mississippi";
let uniqueChars = "";

for (let index = 0; index < text.length; index++) {
    let character = text[index];

    if (character !== undefined && uniqueChars.indexOf(character) === -1) {
        uniqueChars += character;
    }
}

console.log(uniqueChars);
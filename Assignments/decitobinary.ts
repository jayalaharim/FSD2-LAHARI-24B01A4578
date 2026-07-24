let decimalNum = 18;
let binaryValue = "";

while (decimalNum > 0) {
    let remainder = decimalNum % 2;
    binaryValue = remainder + binaryValue;
    decimalNum = Math.floor(decimalNum / 2);
}

console.log(binaryValue);
let binaryNum = "11001";
let decimalValue = 0;
let powerValue = 0;

for (let position = binaryNum.length - 1; position >= 0; position--) {
    if (binaryNum[position] === "1") {
        decimalValue += Math.pow(2, powerValue);
    }
    powerValue++;
}

console.log(decimalValue);
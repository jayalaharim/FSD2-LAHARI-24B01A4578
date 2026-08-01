function getLastItem<T>(items: T[]): T {
    return items[items.length - 1];
}

function printValue<T>(value: T): T {
    return value;
}

const fruits = ["Apple", "Mango", "Orange"];
console.log("Last Fruit:", getLastItem(fruits));

const numbers = [10, 20, 30];
console.log("Last Number:", getLastItem(numbers));

interface Fruit {
    name: string;
    color: string;
}

const fruit: Fruit = {
    name: "Apple",
    color: "Red"
};

console.log(printValue(fruit));
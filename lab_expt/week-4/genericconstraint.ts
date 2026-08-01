interface Person {
    name: string;
}

function displayName<T extends Person>(item: T): string {
    return item.name;
}

console.log(displayName({ name: "Lahari" }));
console.log(displayName({ name: "Rahul", age: 20 }));
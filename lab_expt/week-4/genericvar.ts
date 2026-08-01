class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const idBox = new Box<number>(101);
console.log(idBox.getValue());

const nameBox = new Box<string>("Lahari");
console.log(nameBox.getValue());

interface Student {
    name: string;
    age: number;
}

const studentBox = new Box<Student>({
    name: "Rahul",
    age: 20
});

console.log(studentBox.getValue());
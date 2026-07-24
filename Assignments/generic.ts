class Container<T> {
    private item: T;

    constructor(element: T) {
        this.item = element;
    }

    showItem(): void {
        console.log("Item Stored:", this.item);
    }
}

const integerContainer = new Container<number>(250);
integerContainer.showItem();

const textContainer = new Container<string>("Learning Generics");
textContainer.showItem();

const statusContainer = new Container<boolean>(false);
statusContainer.showItem();
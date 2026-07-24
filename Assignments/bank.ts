class SavingsAccount {
    private amount: number;

    constructor(initialAmount: number) {
        this.amount = initialAmount;
    }

    addMoney(value: number): void {
        this.amount += value;
        console.log("Amount Added:", value);
    }

    removeMoney(value: number): void {
        if (value <= this.amount) {
            this.amount -= value;
            console.log("Amount Deducted:", value);
        } else {
            console.log("Not Enough Balance");
        }
    }

    showAmount(): void {
        console.log("Available Balance:", this.amount);
    }
}

const user = new SavingsAccount(8000);
user.addMoney(1500);
user.removeMoney(3000);
user.showAmount();
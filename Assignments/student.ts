class Learner {
    readonly rollNumber: number;
    studentName: string;

    constructor(roll: number, name: string) {
        this.rollNumber = roll;
        this.studentName = name;
    }

    showDetails(): void {
        console.log("Roll Number:", this.rollNumber);
        console.log("Name:", this.studentName);
    }
}

const learner1 = new Learner(2025, "Priya");
learner1.showDetails();

// learner1.rollNumber = 3001; // Error: Cannot assign to 'rollNumber' because it is a read-only property.
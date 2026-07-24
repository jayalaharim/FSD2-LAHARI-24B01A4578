class Staff {
    public employeeName: string;
    private monthlySalary: number;
    protected section: string;

    constructor(empName: string, pay: number, division: string) {
        this.employeeName = empName;
        this.monthlySalary = pay;
        this.section = division;
    }

    displaySalary() {
        console.log("Monthly Salary:", this.monthlySalary);
    }
}

class TeamLead extends Staff {
    showSection() {
        console.log("Section:", this.section);
    }
}

const staff1 = new Staff("Rakesh", 60000, "Finance");
console.log(staff1.employeeName);
staff1.displaySalary();

const lead1 = new TeamLead("Anjali", 90000, "Development");
lead1.showSection();
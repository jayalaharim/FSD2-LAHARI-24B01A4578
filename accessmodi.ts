"use strict";
class Student {
    // Public property
    studentName = "Jaya";
    // Private property
    marks = 95;
    // Public method
    displayDetails() {
        console.log("Student Name:", this.studentName);
        console.log("Marks:", this.getMarks());
    }
    // Private method
    getMarks() {
        return this.marks;
    }
}
// Main Program
const student = new Student();
// Accessing public property
console.log("Student Name:", student.studentName);
// Calling public method
student.displayDetails();

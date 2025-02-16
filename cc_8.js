// TASK 1
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // calculates net salary after tax
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

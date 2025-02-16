// TASK 1
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // calculates net salary after tax
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// TASK 2
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate); // applies discount to price
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// TASK 3 
const calculateServiceFee = (amount, serviceType) => {
    let rate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.1 : 0.05; // sets service fee based on type of service
    let fee = amount * rate; // calculates service fee
    return `Service Fee: $${fee.toFixed(2)}`;
};

console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// TASK 4
function calculateRentalCost(days, carType, insurance = false) {
    const rates = {"Economy": 40, "Standard": 60, "Luxury": 100 };
    let totalCost = days * rates[carType] + (insurance ? days * 20 : 0);
    return `Total Rental Cost: $${totalCost}`;
}

console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"

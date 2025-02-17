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

// TASK 5 
function calculateLoanPayment( principal, rate, time) {
    let totalPayment = principal + (principal * rate * time); // simple interest formula calculates total loan payment
    return `Payment Total: $${totalPayment.toFixed(2)}`; 
}

console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

// TASK 6
let transactions = [200, 1500, 3200, 800, 2500]; // sets transaction amounts
const filterLargeTransactions = (transactions, filterFunction) => { // filters out transactions based on the filter function
    return transactions.filter(filterFunction);
};

console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // Expected output: [1500, 3200, 2500]

// TASK 7
function createCartTracker() {
    let total = 0; // sets initial cart total
    return function (amount) {
        total += amount; // adds amount to total
        return `Value of Total Cart: $${total}`;
    };
}

let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// TASK 8
function calculateSavings(years, amount) {
    if (years >= 10) return `Savings Amount Projected: $${amount.toFixed(2)}`; // base: returns savings amount projected after 10 years
    return calculateSavings(years + 1, amount * 1.05); // recursive: applies 5 percent interest
}

console.log(calculateSavings(8, 1000)); // Expected output: "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000)); // Expected output: "Projected Savings: $6381.41"
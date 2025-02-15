// Task 1 - Customer Invoice Calculation

function calculateInvoice (subtotal, taxRate, discount) { // creates function that calculates the total invoice
    return subtotal + (subtotal * taxRate) - discount
};

console.log (`Total Invoice: $${calculateInvoice (100, .08, 5).toFixed(2)}`) // logs the function to the console - Output: Total Invoice: $103.00
console.log (`Total Invoice: $${calculateInvoice (500, .1, 20).toFixed(2)}`) // logs the function to the console - Output: Total Invoice: $530.00

// Task 2 - Employee Hourly Wage Calculation

let calculateHourlyWage = function wage (salary, hoursPerWeek) { // creates a function that calculates the hourly wage
    return salary / (hoursPerWeek * 52)
};

console.log (`Hourly Wage: $${calculateHourlyWage(52000, 40).toFixed(2)}`) // logs the function to the console - Output: Hourly Wage: $25.00
console.log (`Hourly Wage: $${calculateHourlyWage(75000, 35).toFixed(2)}`) // logs the function to the console - Output: Hourly Wage: $41.21

// Task 3 - Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => { // creates arrow function that determines discount based on time spent as a Loyalty Member
    if (years >= 5) {
        return amount * (1 - .15)
    } else if (years >= 3) {
        return amount * (1 - .1)
    } else if (years < 3) {
        return amount * (1 - .05)
    }
};

console.log (`Discounted Price: $${calculateLoyaltyDiscount(100, 6).toFixed(2)}`) // logs the function to the console - Output: Discounted Price: $85.00
console.log (`Discounted Price: $${calculateLoyaltyDiscount(200, 2).toFixed(2)}`) // logs the function to the console - Output: Discounted Price: $190.00

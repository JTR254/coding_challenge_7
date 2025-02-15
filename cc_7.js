// Task 1 - Customer Invoice Calculation

function calculateInvoice (subtotal, taxRate, discount) { // creates function that calculates the total invoice
    return subtotal + (subtotal * taxRate) - discount
};

console.log (`Total Invoice: $${calculateInvoice (100, .08, 5).toFixed(2)}`) // logs the function to the console - Output: Total Invoice: $103.00
console.log (`Total Invoice: $${calculateInvoice (500, .1, 20).toFixed(2)}`) // logs the function to the console - Output: Total Invoice: $530.00

// Task 2 - Employee Hourly Wage 

let calculateHourlyWage = function wage (salary, hoursPerWeek) { // creates a function that calculates the hourly wage
    return salary / (hoursPerWeek * 52)
};

console.log (`Hourly Wage: $${calculateHourlyWage(52000, 40).toFixed(2)}`) // logs the function to the console - Output: Hourly Wage: $25.00
console.log (`Hourly Wage: $${calculateHourlyWage(75000, 35).toFixed(2)}`) // logs the function to the console - Output: Hourly Wage: $41.21


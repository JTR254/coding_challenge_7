// Task 1 - Customer Invoice Calculation

function calculateInvoice (subtotal, taxRate, discount) { // creates function that calculates the total invoice
    return subtotal + (subtotal * taxRate) - discount
};

console.log (`Total Invoice: $${calculateInvoice (100, .08, 5)}`) // logs the function to the console - Output: Total Invoice: $103
console.log (`Total Invoice: $${calculateInvoice (500, .1, 20)}`) // logs the function to the console - Output: Total Invoice: $530




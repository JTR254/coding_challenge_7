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

// Task 4 - Product Shipping Cost Calculation

const calculateShippingCost = (weight, location, expedited = false) => { // creates arrow function that determines the shipping price based on weight, location, and if it is expedited
   let cost;
    if (location === "USA") { // if the location is "USA", then multiply .5 by the weight and then add 5
        cost = 5 + .5 * weight
    } else if (location === "Canada") { // if the location is "Canada", then multiply .7 by the weight and add 10
        cost = 10 + .7 * weight
    }

    if (expedited) { // if expedited, add $10 to the cost
        cost += 10
    }

    return `Shipping Cost: $${cost.toFixed(2)}`
};

console.log(calculateShippingCost(10, "USA", true)) // logs the function to the console - Output: Shipping Cost: $20.00
console.log(calculateShippingCost(5, "Canada", false)) // logs the function to the console - Output: Shipping Cost: $13.50

// Task 5 - Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, years) { // creates a function that calculates interest
    let interest;
    return interest = principal * rate * years // the equation is principal * rate * years
}

console.log(`Loan Interest: $${calculateLoanInterest(1000, .05, 3).toFixed(2)}`) // logs the function to the console - Output: Loan Interest: $150
console.log(`Loan Interest: $${calculateLoanInterest(5000, .07, 5).toFixed(2)}`) // logs the function to the console - Output: Loan Interest: $1750

// Task 6 - Filtering High-Value Transactions

let transactions = [500, 1200, 3000, 800, 2200]; // declares an array of transactions
let filterHighValueTransactions = transactions.filter(amount => amount > 1000); // uses filter function to filter the transactions aboave 1000

console.log(filterHighValueTransactions) // logs the function to the console

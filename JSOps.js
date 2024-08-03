// Task 1: Declaring values

let num1;
let num2;

// Task 2: Assigning variables

num1 = 32;
num2 = 27;

// Task 3: Performing Arithmetic Operations and Displaying results

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Exploring assignment operators and Updating values

num1 += 2;
num2 *= 2;
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

//Task 5: Using comparison operators to compare the values

console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);

//Task 6: Applying logical operators to combine conditions and displaying the results.

let isPositive = (num1 > 0) && (num2 > 0);
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
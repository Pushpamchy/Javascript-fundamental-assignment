// Describe the categorization of operators in JavaScript based on their functionality. Provide examples for each category.

// Operators in JavaScript can be categorized based on their functionality into several groups. Here are the main categories along with examples for each:

// Arithmetic Operators:

// Perform mathematical operations on numeric values.
// Examples:

var addition = 5 + 3;       // Addition
var subtraction = 10 - 4;    // Subtraction
var multiplication = 2 * 6;  // Multiplication
var division = 20 / 4;       // Division
var modulus = 15 % 7;        // Modulus (remainder after division)


// Assignment Operators:

// Assign values to variables and modify their values.
// Examples:

var x = 10;        // Assignment
x += 5;            // Addition assignment (x = x + 5)
x -= 3;            // Subtraction assignment (x = x - 3)
x *= 2;            // Multiplication assignment (x = x * 2)


// Comparison Operators:

// Compare values and return a Boolean result.
// Examples:

var a = 5;
var b = 10;
console.log(a == b);   // Equal to
console.log(a != b);   // Not equal to
console.log(a > b);    // Greater than
console.log(a < b);    // Less than
console.log(a >= b);   // Greater than or equal to
console.log(a <= b);   // Less than or equal to


// Logical Operators:

// Combine or manipulate Boolean values.
// Examples:

var isTrue = true;
var isFalse = false;
console.log(isTrue && isFalse);   // Logical AND
console.log(isTrue || isFalse);   // Logical OR
console.log(!isTrue);             // Logical NOT

// Unary Operators:

// Operate on a single operand.
// Examples:

var number = 5;
console.log(-number);   // Unary negation
var count = 0;
count++;               // Increment by 1
count--;               // Decrement by 1


// Bitwise Operators:

// Perform operations at the bit level.
// Examples:

var binaryA = 0b1010;   // Binary representation of 10
var binaryB = 0b1100;   // Binary representation of 12
console.log(binaryA & binaryB);   // Bitwise AND
console.log(binaryA | binaryB);   // Bitwise OR
console.log(binaryA ^ binaryB);   // Bitwise XOR

let myName = "John"; // String
let age = 30; // Number
let isStudent = false; // Boolean
let colors = ["red", "blue", "green"]; // Array
let person = { name: "John", age: 30 }; // Object
let myFunction = function () {
  return "Hello!";
}; // Function
let value; // Undefined (not assigned yet)
let emptyValue = null; // Null (empty value)

let a = 10,
  b = 5;

console.log(a + b); // Addition → 15
console.log(a - b); // Subtraction → 5
console.log(a * b); // Multiplication → 50
console.log(a / b); // Division → 2
console.log(a % b); // Modulus (remainder) → 0
console.log(2 ** 3); // Exponentiation → 8

// Latihan 1
/* 
STORE sisi WITH ANY NUMBER 

SET volume TO sisi MUL sisi MUL sisi
PRINT luas
*/

let sisi = 5;
let volume = sisi * sisi * sisi;
console.log(volume);

// Latihan 2
/* 
STORE r WITH ANY NUMBER 
STORE pi WITH 3.14 

SET luas TO pi MUL r MUL r
PRINT luas
*/

let r = 5;
const pi = 3.14;
let luas = pi * r * r;
console.log(luas);

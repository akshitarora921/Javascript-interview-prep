//Hoisting and Temmporal Dead Zone
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,
console.log(a)  //undefined
var a=20;

// above code can be written as
var a;
console.log(a)
a=20

// temporal dead zone
// The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

console.log(counter1); // undefined
console.log(counter2); // ReferenceError
var counter1 = 1;
let counter2 = 2;
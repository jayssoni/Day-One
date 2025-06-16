// 📅 Day-03.js: Functions & Scope

function greet() {
  return "Hello";
}

const greetExp = function () {
  return "Hi";
};

const arrowGreet = () => "Hey";

// Hoisting
console.log(a); // undefined
var a = 10;

/*
🧠 Day-03 Questions:
1. Define a function using arrow syntax. (Easy)
2. What is the difference between function declaration and expression? (Medium)
3. What is lexical scope? (Medium)
4. How does hoisting work with functions? (Hard)
5. Explain how block scope affects variable access. (Hard)
*/
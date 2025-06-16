// 🚀 JavaScript Interview Practice Questions

// 🟢 EASY LEVEL
// Q1: Difference between var, let and const
var x = 10;
let y = 20;
const z = 30;

// var: function-scoped, hoisted
// let/const: block-scoped, not hoisted like var (temporal dead zone)

// Q2: What is hoisting?
// Hoisting moves variable/function declarations to the top of scope
console.log(a); // undefined
var a = 5;

// Q3: What is the difference between == and === ?
console.log(2 == '2');  // true (type coercion)
console.log(2 === '2'); // false (strict equality)

// Q4: What are truthy and falsy values?
// falsy: false, 0, '', null, undefined, NaN
// Everything else is truthy
if ('0') console.log('Truthy!');

// Q5: What is a closure?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const fn = outer();
console.log(fn()); // 1

// 🟡 MEDIUM LEVEL
// Q6: Explain the event loop and microtask queue
console.log("Start");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output: Start, End, Promise, setTimeout

// Q7: What is 'this' keyword in JavaScript?
const user = {
  name: "Suraj",
  getName() {
    return this.name;
  }
};
console.log(user.getName()); // Suraj

// Q8: Difference between call, apply, and bind
function greet(city) {
  console.log(`${this.name} from ${city}`);
}
const person = { name: 'Amit' };
greet.call(person, 'Delhi');
greet.apply(person, ['Delhi']);
const newGreet = greet.bind(person, 'Delhi');
newGreet(); // Amit from Delhi

// Q9: What is a prototype in JS?
function Car(model) {
  this.model = model;
}
Car.prototype.drive = function() {
  console.log(`Driving ${this.model}`);
};
const car1 = new Car("Tesla");
car1.drive();

// Q10: Difference between map, filter, and reduce
const arr = [1, 2, 3, 4];
console.log(arr.map(x => x * 2));       // [2, 4, 6, 8]
console.log(arr.filter(x => x % 2));    // [1, 3]
console.log(arr.reduce((a, b) => a + b, 0)); // 10

// 🔴 HARD LEVEL
// Q11: Debounce function
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Q12: Throttle function
function throttle(func, delay) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      func.apply(this, args);
    }
  };
}

// Q13: Deep copy vs Shallow copy
const original = { name: 'Suraj', nested: { age: 25 } };
const shallow = { ...original };
shallow.nested.age = 30;
console.log(original.nested.age); // 30

// Q14: How does garbage collection work in JS?
// JS uses mark-and-sweep algorithm to remove objects that are no longer referenced

// Q15: What is the difference between null, undefined and NaN?
// null: empty value
// undefined: declared but not assigned
// NaN: Not a Number (e.g. 'abc' * 2)


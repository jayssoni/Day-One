// 📅 Day-12.js: Advanced JavaScript Concepts (Proxies, Generators, Modules)

/*
🔍 Overview:
Today's topics explore advanced JS mechanics that give developers powerful control over behavior and structure.
Topics: Proxy, Reflect, Generator Functions, and Modules (ESM).
*/

// 🛡️ Proxy: Intercept and customize object behavior
const person = {
  name: 'Suraj',
  age: 25,
};

const handler = {
  get(target, property) {
    return property in target ? target[property] : 'Property not found';
  },
  set(target, property, value) {
    if (property === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    target[property] = value;
    return true;
  },
};

const proxyPerson = new Proxy(person, handler);
console.log(proxyPerson.name); // Suraj
console.log(proxyPerson.location); // Property not found
proxyPerson.age = 26;
// proxyPerson.age = 'twenty'; // ❌ Throws error

// 🔍 Reflect: Built-in object to simplify Proxy operations
Reflect.set(person, 'name', 'Amit');
console.log(Reflect.get(person, 'name')); // Amit

// 🔁 Generator Functions: Pause & resume execution (useful for async and sequences)
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true

// 📦 ES Modules (ESM): Modularize JS (Run only in modules or modern bundlers)
// file: mathUtil.js
/*
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;
*/

// file: main.js
/*
import { add, PI } from './mathUtil.js';
console.log(add(5, 3)); // 8
console.log(PI); // 3.14159
*/

/*
📚 Prototype Explanation:
In JavaScript, every object has an internal link to another object called its prototype.
This is used for inheritance. When you try to access a property or method on an object,
JavaScript will look at the object itself, then walk up the prototype chain if it's not found.

Example:
*/
function Student(name) {
  this.name = name;
}

// Define a method on the prototype so all instances share it
Student.prototype.sayHello = function () {
  return `Hi, I'm ${this.name}`;
};

const s1 = new Student('Ravi');
console.log(s1.sayHello()); // Hi, I'm Ravi

// Internally, JS checks:
// 1. Does s1 have sayHello()? ❌
// 2. Check s1.__proto__ → Student.prototype ✅
// 3. Executes the shared sayHello()

/*
🧠 Day-12 Questions:
1. What is a Proxy in JS and how can it be used to validate properties? (Easy)
2. How does Reflect help with default object operations inside a Proxy? (Medium)
3. What is a Generator function and how does it differ from a normal function? (Medium)
4. Why use ES Modules instead of global variables or IIFE? (Hard)
5. Create a generator that yields even numbers from 2 to 10. (Hard)
*/

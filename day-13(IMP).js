// 📅 Day-13.js: Event Loop, Call Stack, and Closures

/*
🔍 Overview:
This file covers core JS runtime mechanics and closure behavior.
Topics:
- Call Stack
- Event Loop (Macro vs Microtasks)
- Closures and Lexical Scope
*/

// ✅ Q1: What is the Call Stack in JavaScript?
// It is a LIFO data structure used by JS to keep track of function calls.
function greet() {
  sayHello();
}
function sayHello() {
  console.log("Hello!");
}
greet(); // Call stack: greet -> sayHello -> console.log


// ✅ Q2: What is the Event Loop? How does it work?
// JS is single-threaded but uses the event loop to manage async tasks.
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output: Start → End → Promise → Timeout


// ✅ Q3: What is the difference between microtasks and macrotasks?
// Microtasks (Promises) execute before macrotasks (setTimeout) after current stack.


// ✅ Q4: What is a Closure? Provide a use case.
// A closure gives a function access to its outer function's scope chain even after the outer function has returned.
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2


// ✅ Q5: Output-based Question on closure & var
// What will this output?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3
// Reason: 'var' has function scope, not block scope. All closures share same `i`


// 🧠 BONUS: Using let to fix closure problem
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 1000);
}
// Output: let: 0, let: 1, let: 2


/*
📋 Day-13 Summary:
✔️ Call Stack = execution context manager
✔️ Event Loop = manages async tasks (macro/micro queue)
✔️ Closures = functions with preserved scope references
*/

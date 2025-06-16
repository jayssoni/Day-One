# 📘 JavaScript Mastery Syllabus & Theory (Inspired by Eloquent JavaScript)

---

## 📚 Overview

| Day | Topics |
|-----|--------|
| 1 | JavaScript Introduction, Variables, Data Types |
| 2 | Operators, Type Coercion, Ternary, Nullish Coalescing |
| 3 | Functions, Arrow Functions, Hoisting, Scope |
| 4 | Arrays, Array Methods (map, filter, reduce, etc.) |
| 5 | Objects, Destructuring, Spread & Rest |
| 6 | Loops, Iteration, Control Structures |
| 7 | Bitwise Operators, Optional Chaining |
| 8 | DOM Manipulation, Event Handling |
| 9 | Asynchronous JS (Callbacks, Promises, Async/Await) |
| 10 | Closures, `this`, Event Loop, Debounce & Throttle |

---

## 📅 Day 1: JavaScript Basics

### 🔹 JavaScript Overview
JavaScript is a lightweight, interpreted scripting language used to make web pages interactive. It runs in the browser and also on servers via Node.js.

### 🔹 Variables
- `var`: function-scoped, hoisted, can be re-declared.
- `let`: block-scoped, not hoisted like `var`.
- `const`: block-scoped, immutable reference.

### 🔹 Data Types
- **Primitive**: string, number, boolean, undefined, null, bigint, symbol.
- **Non-Primitive**: object, array, function.

### 🔹 Type Checking
Use `typeof` to determine variable type.

---

## 📅 Day 2: Operators & Coercion

### 🔹 Arithmetic & Comparison Operators
Basic math and comparisons: `+`, `-`, `*`, `/`, `==`, `===`, `!=`, `!==`, `<`, `>`.

### 🔹 Logical Operators
- `&&`: AND
- `||`: OR
- `!`: NOT

### 🔹 Ternary Operator
A shorthand for `if...else`.

### 🔹 Type Coercion
JavaScript automatically converts data types in expressions when necessary.

### 🔹 Nullish Coalescing Operator (`??`)
Returns the right-hand operand when the left-hand is `null` or `undefined`.

---

## 📅 Day 3: Functions & Scope

### 🔹 Function Types
- **Function Declaration**
- **Function Expression**
- **Arrow Functions**

### 🔹 Scope
- **Global**: accessible everywhere.
- **Function**: accessible within the function.
- **Block**: accessible within `{}` blocks (`let`, `const` only).

### 🔹 Hoisting
Variable and function declarations are moved to the top of their scope before execution.

---

## 📅 Day 4: Arrays & Methods

### 🔹 Arrays
Lists of values stored in order.

### 🔹 Array Methods
- `forEach()`: Loop through elements.
- `map()`: Transform elements.
- `filter()`: Select matching elements.
- `reduce()`: Aggregate into single value.

---

## 📅 Day 5: Objects & Destructuring

### 🔹 Objects
Key-value pairs, like dictionaries.

### 🔹 Destructuring
Extract values from arrays or properties from objects into variables.

### 🔹 Spread & Rest
- **Spread (`...`)**: Expand an array or object.
- **Rest (`...`)**: Collect remaining elements or args.

---

## 📅 Day 6: Loops & Iteration

### 🔹 Loop Types
- `for`, `while`, `do...while`
- `for...of`: iterates over values.
- `for...in`: iterates over keys.

### 🔹 Control Flow
- `if`, `else`, `switch`, `break`, `continue`

---

## 📅 Day 7: Bitwise & Optional Chaining

### 🔹 Bitwise Operators
Operate at binary level: `&`, `|`, `^`, `~`, `<<`, `>>`

### 🔹 Optional Chaining (`?.`)
Safely access deeply nested object properties without causing an error if a reference is `null` or `undefined`.

---

## 📅 Day 8: DOM & Events

### 🔹 DOM (Document Object Model)
Tree-like representation of the webpage. JavaScript can select and manipulate DOM elements.

### 🔹 Selecting Elements
Using methods like:
- `getElementById`
- `querySelector`
- `getElementsByClassName`

### 🔹 Event Handling
React to user actions using:
- `onclick`, `oninput`
- `addEventListener()`

---

## 📅 Day 9: Asynchronous JavaScript

### 🔹 Callbacks
A function passed into another function to run later.

### 🔹 Promises
A modern way to handle async operations and avoid callback hell.

### 🔹 Async/Await
A syntactic sugar over Promises for writing asynchronous code like synchronous.

---

## 📅 Day 10: Closures, `this`, Event Loop, Debounce, Throttle

### 🔹 Closures
A function remembers its outer variables even after the outer function has finished execution.

### 🔹 `this` Keyword
Refers to the object that is executing the current function.

### 🔹 Event Loop
Mechanism that handles async behavior in JS using the call stack and message queue.

### 🔹 Debounce
Delays function execution until a pause in events.

### 🔹 Throttle
Limits how often a function is called during repetitive events (like scroll).

---


# 📘 JavaScript Core Theory Notes – All-in-One (Beginner to Advanced)

> 🗓️ Updated: June 16, 2025

---

## 📌 1. Why JavaScript Is Single-Threaded

JavaScript was designed to run in the browser and manipulate the DOM. Allowing multiple threads to change the UI at the same time would create race conditions and bugs.

### ✅ Reasons:
- Safe DOM manipulation (no thread collision)
- Simple synchronous programming model
- Lightweight and fast for client-side apps

---

## 🧵 2. What Does “Single-Threaded” Mean?

- JavaScript runs one piece of code at a time on a **single call stack**.
- There is **only one execution context active at a time**.
- No simultaneous operations unless handled by the browser (via APIs like `setTimeout`, `fetch`, etc.).

---

## 🔁 3. JavaScript Runtime Architecture

```txt
JavaScript Engine
├── Call Stack         → Executes synchronous code
└── Event Loop
    ├── Microtask Queue → Promise.then, queueMicrotask
    └── Macrotask Queue → setTimeout, setInterval, DOM Events

```


---

## 📦 4. Web APIs

Web APIs are features provided by **browsers**, not the JavaScript engine itself.

**Examples:**
- `setTimeout`, `setInterval`
- `fetch`, `XMLHttpRequest`
- `DOM Events`, `WebSocket`
- `Geolocation`, `LocalStorage`

---

## 🔂 5. Event Loop

- Keeps checking if the **call stack is empty**.
- If yes, moves tasks from queues (micro or macro) into the stack.

### Task Priorities:
1. All synchronous code runs first.
2. Then microtasks (Promise handlers).
3. Then macrotasks (timers, events).

---

## 🎯 6. Microtask vs Macrotask

| Feature         | Microtask                    | Macrotask                     |
|------------------|------------------------------|-------------------------------|
| Common Examples  | `Promise.then()`, `async/await`, `queueMicrotask()` | `setTimeout()`, `setInterval()`, `DOM events` |
| Priority         | Higher                       | Lower                         |
| When Executed    | Right after stack clears     | After microtasks              |

---

## 💡 7. Example Execution

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

```

## 🧠 8. Interview Key Points

- JavaScript is **single-threaded** for DOM safety.
- Uses **Web APIs + Event Loop** for asynchronous code.
- **Microtasks** run before **macrotasks**.
- `Promise.then()` is a **microtask**.
- `setTimeout` is a **macrotask**.

---

## ✅ 9. Final Notes

- JS async behavior is powered by the **browser**, not native concurrency.
- The single thread makes JavaScript **lightweight and deterministic**.
- Learn the **Event Loop** – it's one of the most frequently asked interview topics!


# ✅ End of Theory Section

📂 You can now move to the next part: **JavaScript Code Examples Section** with all relevant examples day-by-day.

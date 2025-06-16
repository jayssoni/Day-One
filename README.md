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

# ✅ End of Theory Section

📂 You can now move to the next part: **JavaScript Code Examples Section** with all relevant examples day-by-day.

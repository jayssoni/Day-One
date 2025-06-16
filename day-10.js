// 📅 Day-10.js: Closures, this, Event Loop, Debounce, Throttle

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

const obj = {
  name: "Suraj",
  greet() {
    console.log(this.name);
  },
};
obj.greet();

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let waiting = false;
  return (...args) => {
    if (!waiting) {
      fn(...args);
      waiting = true;
      setTimeout(() => (waiting = false), limit);
    }
  };
}

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

/*
🧠 Day-10 Questions:
1. What is a closure in JS? (Easy)
2. How does `this` keyword work? (Medium)
3. What is the event loop in JS? (Medium)
4. Difference between debounce and throttle? (Hard)
5. Implement debounce and throttle functions. (Hard)
*/

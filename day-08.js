// 📅 Day-08.js: DOM & Events

// HTML: <button id="btn">Click Me</button>
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Button Clicked");
});

/*
🧠 Day-08 Questions:
1. How to access an HTML element in JS? (Easy)
2. Difference between `onclick` and `addEventListener`? (Medium)
3. What is event bubbling and how to stop it? (Hard)
4. How to dynamically update the DOM using JS? (Medium)
5. What are different mouse and keyboard event types? (Medium)
*/
// 📅 Day-05.js: Objects & Destructuring

const person = {
  name: "Suraj",
  age: 25,
};

const { name } = person;
const [first, second] = [10, 20, 30];

const clone = { ...person, city: "Delhi" };

function showInfo(...args) {
  console.log(args);
}

/*
🧠 Day-05 Questions:
1. How to destructure an object? (Easy)
2. Difference between spread and rest operator? (Medium)
3. How to clone an object using spread? (Medium)
4. What happens if a key is missing during destructuring? (Hard)
5. How to merge two objects without mutation? (Hard)
*/
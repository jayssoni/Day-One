// 📅 Day-07.js: Bitwise & Optional Chaining

console.log(5 & 1); // 1
console.log(5 | 1); // 5

const user = {
  profile: {
    email: "suraj@example.com",
  },
};

console.log(user?.profile?.email); // suraj@example.com

/*
🧠 Day-07 Questions:
1. What does `&` and `|` operator do in JS? (Easy)
2. How is optional chaining `?.` used? (Easy)
3. What happens if a property doesn't exist with `?.`? (Medium)
4. How can bitwise operators help with flags? (Hard)
5. Write a function using optional chaining safely. (Hard)
*/
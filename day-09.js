// 📅 Day-09.js: Async JavaScript

function fetchData(callback) {
  setTimeout(() => callback("data fetched"), 1000);
}

fetchData(data => console.log(data));

const promise = new Promise(resolve => {
  setTimeout(() => resolve("done"), 1000);
});

promise.then(console.log);

async function getData() {
  let res = await promise;
  console.log(res);
}
getData();

/*
🧠 Day-09 Questions:
1. What is a callback function? (Easy)
2. How do Promises work? (Medium)
3. What is async/await? (Medium)
4. Difference between callback and Promise? (Hard)
5. What are common mistakes using async/await? (Hard)
*/

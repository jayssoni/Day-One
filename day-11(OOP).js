// 📅 Day-11.js: Object-Oriented JavaScript (OOP)

// Constructor Function
// Constructor functions are used to create multiple similar objects.
// 'this' binds the properties to the instance created using 'new'.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype allows all instances to share it.
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const suraj = new Person("Suraj", 25);
console.log(suraj.greet());

// Class Syntax (ES6)
// ES6 introduced 'class' syntax as a cleaner and clearer way to define constructors and prototypes.
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
  // Methods are defined inside the class body
  makeSound() {
    return `${this.type} says ${this.sound}`;
  }
}

const dog = new Animal("Dog", "Woof");
console.log(dog.makeSound());

// Inheritance
// Classes can extend other classes using 'extends' keyword.
// 'super' is used to call the parent class constructor.
class Dog extends Animal {
  constructor(breed) {
    super("Dog", "Woof");
    this.breed = breed;
  }
  describe() {
    return `${this.breed} is a ${this.type}`;
  }
}

const labrador = new Dog("Labrador");
console.log(labrador.describe());

// Encapsulation with private fields (#)
// Private fields (prefix with #) are accessible only inside the class.
// They provide true data hiding.
class Counter {
  #count = 0; // private field
  increment() {
    this.#count++;
  }
  get value() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.value); // 2

// Polymorphism example
// Polymorphism allows different classes to define methods with the same name but different behavior.
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(3);
console.log(circle.area());

/*
🧠 Day-11 Questions:
1. How do you create an object using a constructor function? (Easy)
2. What is the difference between a class and a constructor function? (Medium)
3. How does inheritance work in JavaScript classes? (Medium)
4. What are private fields in classes? How are they declared? (Hard)
5. How would you demonstrate polymorphism in JS? (Hard)
*/

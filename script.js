// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
  return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
}

et alice = new Person("Alice", 25);
console.log(alice.greet()); // This should log: Hello, my name is Alice, I am 25 years old.

let bob = new Employee("Bob", 30, "Manager");
console.log(bob.greet()); // This should log: Hello, my name is Bob, I am 30 years old.
console.log(bob.jobGreet()); // This should log: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.firstName}`
  }
}

module.exports = Person;

const Person = require('./Person');

class Student extends Person {
  constructor(firstName, lastName, age, school) {
    super(firstName, lastName, age)
    this.school = school;
  }

  sayMySchool() {
    return `Hello, my school is ${this.school}`
  }

  get myName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// let paul = new Person('Paul', 'BERTRAND', 67)
let paul = new Student('Paul', 'BERTRAND', 67, 'WildCodeSchool')

// console.log(paul.sayHello());
// console.log(paul.sayMySchool());
console.log(paul.myName);
paul.lastName = 'test';

console.log(paul.lastName)
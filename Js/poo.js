class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    speak() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
    }
}

const person = new Person("Tiago", "Reis", 20);
person.getFullName();
person.speak();

console.log(person);


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barked!`);
    }
}

const animal = new Animal("Lion");
animal.speak();

const dog = new Dog("Rex");
dog.speak();

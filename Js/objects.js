const person = {
    FirstName: "Tiago",
    lastName: "Reis",
    age: 20,
    hobbies: ["Programar", "Jogar", "Ler"],
    city: "Lisboa",
    dog: {"name": "Rex", "age": 5},
}

// const firstName = person.name;
// const lastName = person.lastName;
// const age = person.age;
// const city = person.city;
// const hobbies = person.hobbies;

const{FirstName, lastName, age, city, hobbies, dog} = person;

const reading = hobbies[2];

console.log(person);
console.log(FirstName);
console.log(lastName);
console.log(age);
console.log(city);
console.log(hobbies);
console.log(dog);

const todos = [
    {
        id: 1,
        description: "Estudar programação"
        ,completed: false
    },
    {
        id: 2,
        description: "Ler um livro",
        completed: true
    },
    {
        id: 3,
        description: "Fazer exercícios",
        completed: false
    }

];

const descriptionOfLastTodo = todos[todos.length - 1].description;

console.log(descriptionOfLastTodo);
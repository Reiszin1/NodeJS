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

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);
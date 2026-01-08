const person = {
    name: "Tiago",
    age: 25
};

for (property in person) {
    console.log(property, person[property]);
}

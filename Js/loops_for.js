for(let i = 1; i <= 10; i++) {
    console.log(i);
}

const cars = ["Ferrari", "Mercedes", "Audi"];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
}   

cars.forEach(function(car, index) {
    console.log(index, car);
});
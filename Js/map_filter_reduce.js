const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedBy2 = numbers.map(function(number) {
    return number * 2;
});



const ages = [8, 13, 27, 20, 15, 32, 35, 39, 10, 5];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0;
});

const sumOfAges = ages.reduce(function(age, accumulator) {
    return accumulator + age;
}, 0);

console.log(numbers);
console.log(numbersMultipliedBy2);
console.log(evenAges);
console.log(sumOfAges);
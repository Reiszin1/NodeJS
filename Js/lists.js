const names = ["Tiago", "João", "Maria"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names);

names.push("Pedro");
console.log(names);

names.unshift("Paulo");
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);

names[0] = "Tiaguinho";
console.log(names);

const indexOfTiago = names.indexOf("Tiaguinho");

const namesIsArray = Array.isArray(names);

const sortedNames = names.sort();

console.log(sortedNames);
console.log(indexOfTiago);
console.log(names.length);
console.log(namesIsArray);








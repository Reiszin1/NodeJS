const sum = 1 + 2;

if (sum === 2) {
    console.log("A soma é 2");
} else if (sum === 3) {
    console.log("A soma é 3");
} else {
    console.log("A soma não é 2 ou 3");
}

const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6) {
    console.log("A soma é 4 e 6");
 } else if (sum1 === 4 || sum2 === 6) {
    console.log("A soma é 4 ou 6");
} else {
    console.log("A soma não é 4 e 6");
}

const car = 'Ferrari';
const text = 'O carro é um(a) ';

switch(car) {
    case 'Ferrari':
        console.log(text + 'Ferrari');
        break;
    case 'Mercedes':
        console.log(text + 'Mercedes');
        break;
    default:
        console.log(text + 'carro não encontrado');
}


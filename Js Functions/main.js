import { ViewName } from './services/services.js';
import { sum } from './services/services.js';

const inputName = document.querySelector('#name');
const submitButton = document.querySelector('#submit-button');
const nameOutput = document.querySelector('#name-output');

const number1Input = document.querySelector('#number1');
const number2Input = document.querySelector('#number2');
const sumButton = document.querySelector('#sum-button');
const sumOutput = document.querySelector('#sum-output');


submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const nameValue = inputName.value;
    ViewName(nameValue);
    nameOutput.textContent = `Hello, my name is ${nameValue}`;
});

sumButton.addEventListener('click', function (e) {
    e.preventDefault();
    const number1Value = parseInt(number1Input.value);
    const number2Value = parseInt(number2Input.value);
    const sumValue = sum(number1Value, number2Value);
    sumOutput.textContent = `A soma de ${number1Value} e ${number2Value} é ${sumValue}`;
});
const submitButton = document.querySelector('#submit-button');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items = document.querySelector('.items');
const successMessage = 'Formulário enviado com sucesso';
const errorMessage = 'Por favor, preencha todos os campos';
const body = document.querySelector('body');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const nameValue = nameInput.value;
    console.log(nameValue);

    const emailValue = emailInput.value;
    console.log(emailValue);

    if (nameValue === '' || emailValue === '') {
        myForm.style.background = 'red';
        items.firstElementChild.textContent = errorMessage;
        body.style.background = 'red';
        return false;
    } else {

        console.log(successMessage);
        myForm.style.background = 'green';
        body.style.background = 'green';
        items.firstElementChild.textContent = nameValue;
        items.children[1].textContent = emailValue;
        items.lastElementChild.textContent = successMessage;
    }


});

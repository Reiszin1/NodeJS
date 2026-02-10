const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');
const submitMessage = document.querySelector('.msg');
const items = document.querySelector('.items');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        submitMessage.textContent = 'Por favor, preencha todos os campos';
        submitMessage.classList.add('error');
        submitMessage.style.color = 'white';
        return false;

    } else {
        console.log('Formulário enviado'); submitMessage.textContent = 'Formulário enviado';
        submitMessage.style.color = 'green';
        submitMessage.classList.remove('error');

        setTimeout(() => {
            submitMessage.textContent = '';
        }, 3000);
    }

    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`;
    items.appendChild(li);
    submitMessage.classList.remove('error');
    nameInput.value = '';
    emailInput.value = '';
});
const items = document.querySelector('.items');
const submitButton = document.getElementById('submit-button');

// Função para criar e adicionar um novo item
function adicionarItem() {
    const novoItem = document.createElement('li');
    novoItem.className = 'item';

    // Calcula o número do item baseado na quantidade existente
    const numeroItem = items.children.length + 1;
    novoItem.textContent = `item ${numeroItem}`;

    items.appendChild(novoItem);
}

// Adiciona event listener ao botão de submit
submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    adicionarItem();
});

const input = document.querySelector("#capfav");
const botao = document.querySelector("#add");
const lista = document.querySelector("ul");
const aviso = document.querySelector("h2");

botao.addEventListener('click', function() {
    if (input.value.trim() !== "") {
        aviso.textContent = "";
        const li = document.createElement('li'); // criando lista na ul
        li.textContent = input.value; // add o valor digitado na input na li

        const botaoExcluir = document.createElement('button'); // cria botao excluir
        botaoExcluir.textContent = '❌'; // altera o botao para um X

        botaoExcluir.addEventListener('click', function() {
            lista.removeChild(li); // remove a li daquela linha criada junto com o botão
            aviso.textContent = "";
            input.focus(); // coloca o cursor de digitar de volta na input para poder digitar outro cap sem clicar nela
        });

        li.append(botaoExcluir); // coloca o botao na mesma li que o texto digitado
        lista.append(li); // coloca a li com o txt e o botao na ul
        input.value = '';
        input.focus();
    } else {
        aviso.textContent = "Insira um livro e capítulo para adicionar."
        input.focus();
    }
});





// 1️⃣ Inicialize a variável do elemento de exibiçãoconst 
visitasElement = document.querySelector(".visitas");
hora = document.querySelector(".today");

// 2️⃣ Obtenha o VALOR armazenado para a chave numVisitas-ls no localStorage, se existir. Se a chave numVisitas estiver faltando, atribua 0 à variável numVisitas.
let numVisitas = Number(window.localStorage.getItem("numVisitas-ls")) || 0; // procura pelo elemento(chave, valor) mas ainda não exite então numVisitas do tipo number é null = 0

// 3️⃣ Determine se esta é a primeira visita ou exiba o número de visitas. Escrevemos este exemplo de forma inversa para que você pense profundamente sobre a lógica.
if (numVisitas !== 0) {
	visitasElement.textContent = numVisitas;
} else {
	visitasElement.textContent = `Esta é sua primeira visita. 🥳 Bem-vindo!`;
}

// 4️⃣ incremente o número de visitas em um.
numVisitas++;

// 5️⃣ armazene o novo total de visitas no localStorage, chave=numVisits-ls
localStorage.setItem("numVisitas-ls", numVisitas); // com setItem cria o elemento(chave, valor) sendo "numVisitas-ls o nome da variável e numVisitas o valor da mesma."
// 💡Um cliente pode visualizar os dados do localStorage usando o painel de Aplicações nas DevTools do navegador - confira em qualquer site importante.

hora.textContent = `${Date.now()} em milisegundos desde o dia 31 de dezembro de 1969`;





// abaixo criação do js para adicionar os capitulos do LM na página e guardar no localStorage --------------------------------------------------------------------------------

const input = document.querySelector('#capfav');
const botao = document.querySelector('#botao');
const lista = document.querySelector('#lista');

// A declaração de array inicializa a variável arrayCapitulos com a lista de capítulos retornados pela função
// obterListaDeCapitulos() ou um array vazio se a chamada de função retornar null (nulo) ou undefined (indefinido).
let arrayCapitulos = obterListaDeCapitulos() || [];

arrayCapitulos.forEach(capitulo => {
	exibirLista(capitulo);
});

botao.addEventListener('click', () => {
	if (input.value !== '') {  // certifique-se de que a entrada não esteja vazia
		exibirLista(input.value); // chama a função que gera o capítulo enviado
		arrayCapitulos.push(input.value);  // adicione o capítulo ao array
		definirListaDeCapitulos(); // atualize o localStorage com o novo array
		input.value = ''; // limpe a entrada
		input.focus(); // defina o foco de volta para a entrada
	}
});

function exibirLista(item) {
	let li = document.createElement('li'); // cria o elemento li de da ul do html
	let botaoExcluir = document.createElement('button'); // cria o botão excluir na pagina do navegador
	li.textContent = item; // observe o uso do 'item' do parâmetro exibirLista, recebe o valor da variavel input com input.value como item.
	botaoExcluir.textContent = '❌'; // coloca esse icone no botao excluir
	botaoExcluir.classList.add('delete'); // isso faz referência à regra CSS .delete{width:fit-content;} para dimensionar o botão de exclusão
	li.append(botaoExcluir); // adicona o botao exclui inline com o item da li criada na ul
	lista.append(li); // adiciona a li na ul

	botaoExcluir.addEventListener('click', function () {
		lista.removeChild(li); // remove a li respectiva inline com o botao excluir
		excluirCapitulo(li.textContent); // observe esta nova função que é necessária para remover o capítulo do array e do localStorage.
		input.focus(); // defina o foco de volta para a entrada
	});
}

function definirListaDeCapitulos() {
	localStorage.setItem('minhaListaFavoritosLDM', JSON.stringify(arrayCapitulos)); // criando a variavel do localStorage com o valor convertido em string da arrayCapitulos
}

// reconverte o que está em string no localStorage de volta para array e coloca na variavel arrayCapítulos para pode trabalhar com os dados em js. 
function obterListaDeCapitulos() {
	return JSON.parse(localStorage.getItem('minhaListaFavoritosLDM'));
}

function excluirCapitulo(capitulo) {
	capitulo = capitulo.slice(0, capitulo.length - 1);
	arrayCapitulos = arrayCapitulos.filter(item => item !== capitulo);
	definirListaDeCapitulos();
}
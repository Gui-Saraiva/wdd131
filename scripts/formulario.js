const produtos = [
    {
      id: "fc-1888",
      nome: "capacitor de fluxo",
      classificacaomedia: 4.5
    },
    {
      id: "fc-2050",
      nome: "fios elétricos",
      classificacaomedia: 4.7
    },
    {
      id: "fs-1987",
      nome: "circuitos de tempo",
      classificacaomedia: 3.5
    },
    {
      id: "ac-2000",
      nome: "reator de baixa tensão",
      classificacaomedia: 3.9
    },
    {
      id: "jj-1969",
      nome: "equalizador de distorção",
      classificacaomedia: 5.0
    }
  ];

function criarProdutos (arrayProdutos) {
    let select = document.querySelector("select");

    arrayProdutos.forEach(produto => {
        let produtoOption = document.createElement("option");
        
        produtoOption.textContent = produto.nome;
        produtoOption.value = produto.id;
        select.appendChild(produtoOption);
    });
}

criarProdutos(produtos);



























// PADRÃO DO FOOTER ------------------------------------------------------------------------------------------------------------------------

const ano = document.querySelector('#anoAtual');
const data = document.querySelector('#ultimaMoficacao');

const hoje = new Date();
let dataCompleta = new Intl.DateTimeFormat('pt-BR', {day: "2-digit", weekday: "long", month: "long", year: "numeric"}).format(hoje);

ano.innerHTML = hoje.getFullYear();
data.innerHTML = `Última modificação: ${dataCompleta}`;
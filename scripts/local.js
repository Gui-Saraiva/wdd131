const ano = document.querySelector('#anoAtual');
const data = document.querySelector('#ultimaMoficacao');

const temperatura = document.querySelector('.temperatura');
const temperaturaConvertida = parseInt(temperatura.textContent);

const velocidadeVento = document.querySelector('.velocidade-vento');
const velocidadeVentoConvertida = parseFloat(velocidadeVento.textContent);

const sensacaoTermica = document.querySelector('.sensacao');

function calcularSensacaoTermica(temperatura, velocidadeDoVento){
    sensacao = 13.12 + (0.6215 * temperatura) - (11.37 * velocidadeDoVento ** 0.16) + (0.3965 * temperatura * velocidadeDoVento ** 0.16);
    return `${sensacao.toFixed(1)} °C`;
}

if (temperaturaConvertida <= 10 && velocidadeVentoConvertida > 4.8) {
    sensacaoTermica.textContent = calcularSensacaoTermica(temperaturaConvertida, velocidadeVentoConvertida);
} else {
    sensacaoTermica.textContent = "N/A";
}

const hoje = new Date();

let dataCompleta = new Intl.DateTimeFormat('pt-BR', {
    day: "2-digit", 
    weekday: "long", 
    month: "long", 
    year: "numeric"
}).format(hoje);

ano.innerHTML = hoje.getFullYear();
data.innerHTML = `Última modificação: ${dataCompleta}`;

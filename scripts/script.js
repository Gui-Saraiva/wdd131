const btnHamb = document.querySelector('#hamb');
const nav = document.querySelector('nav');
const txtAlbum = document.querySelector('.titulo');
const ano = document.querySelector('#anoAtual');
const data = document.querySelector('#ultimaMoficacao');

const hoje = new Date();
let dataCompleta = new Intl.DateTimeFormat('pt-BR', {day: "2-digit", weekday: "long", month: "long", year: "numeric"}).format(hoje);

btnHamb.addEventListener('click', () => {
    btnHamb.classList.toggle('open');
    nav.classList.toggle('open');
    txtAlbum.classList.toggle('open');
})

ano.innerHTML = hoje.getFullYear();
data.innerHTML = `Última modificação: ${dataCompleta}`;
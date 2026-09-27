const btnHamb = document.querySelector('#hamb');
const nav = document.querySelector('nav');
const txtAlbum = document.querySelector('.titulo');
const ano = document.querySelector('#anoAtual');
const data = document.querySelector('#ultimaMoficacao');
const titulo = document.querySelector("h1")

const hoje = new Date();
let dataCompleta = new Intl.DateTimeFormat('pt-BR', {day: "2-digit", weekday: "long", month: "long", year: "numeric"}).format(hoje);

btnHamb.addEventListener('click', () => {
    btnHamb.classList.toggle('open');
    nav.classList.toggle('open');
    txtAlbum.classList.toggle('open');
})

ano.innerHTML = hoje.getFullYear();
data.innerHTML = `Última modificação: ${dataCompleta}`;

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-07-07",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "São Paulo Brasil",
        localizacao: "São Paulo-SP, Brasil",
        consagracao: "1978-10-30",
        area: 59246,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-59763.jpg"
    },
    {
        nomeDoTemplo: "Campinas Brasil",
        localizacao: "Campinas-SP, Brasil",
        consagracao: "2022-05-17",
        area: 48100,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-1627.jpg"
    },
    {
        nomeDoTemplo: "Porto Alegre Brasil",
        localizacao: "Porto Alegre-RS, Brasil",
        consagracao: "2000-12-17",
        area: 13325,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-6697.jpg"
    }
  ];

criarCardTemplo(templos);

function criarCardTemplo(templos) {
    document.querySelector(".container-img-templos").innerHTML = "";

    templos.forEach(templo => {
        let card = document.createElement("section");
        let nome = document.createElement("h2");
        let localizacao = document.createElement("p");
        let dedicacao = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        
        card.classList.add("card"); // criando classe para o card para estilizar os elementos

        nome.textContent = templo.nomeDoTemplo;
        localizacao.innerHTML = `<span class="label">LOCALIZAÇÃO:</span> ${templo.localizacao}`;
        dedicacao.innerHTML = `<span class="label">DEDICADO:</span> ${templo.consagracao}`;
        area.innerHTML = `<span class="label">TAMANHO:</span> ${templo.area} pés²`;
        img.setAttribute("src", templo.urlDaImagem);
        img.setAttribute("alt", `Templo ${templo.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 400);
        img.setAttribute("height", 250);

        card.appendChild(nome);
        card.appendChild(localizacao);
        card.appendChild(dedicacao);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container-img-templos").appendChild(card);
    });    
}

const dataTemplosAntigos = new Date("1900-01-01");
const dataTemplosNovos = new Date("2000-01-01");
const templosGrandes = 90000;
const templosPequenos = 10000;
const todosTemplos = function() {return true};

function tornarAtivo(elementotagA) {
    document.querySelectorAll("a").forEach(elemento => { // elemento é a variavel para cada tagA percorrida
        elemento.classList.remove("active"); // remove o active de todos as tags A
    });
    elementotagA.classList.add("active"); // adiciona active somente na tag clicada passada para o parametro dessa função tornarAtivo()
}

function configFiltro(seletorId, objArrayTemplos, textoTitulo) {
    const elemento = document.querySelector(seletorId); // pega o elemento pela id... #novos, #antigos...

    elemento.addEventListener("click", () => { // ve qual elemento foi clicado... #pequenos, #grandes...
        tornarAtivo(elemento); // torna esse elemento ativo
        titulo.textContent = "Página Inicial";
        criarCardTemplo(templos.filter(objArrayTemplos)); // filtra dentro da função que criou os cards deixando somente os filtrados
    });
}

configFiltro("#todos", todosTemplos);

configFiltro("#antigos", templo => {
    titulo.textContent = "Templos Antigos";
    return new Date(templo.consagracao) <= new Date(dataTemplosAntigos);
});

configFiltro("#novos", templo => {
    titulo.textContent = "Templos Novos";
    return new Date(templo.consagracao) >= new Date(dataTemplosNovos);
});

configFiltro("#grandes", templo => {
    titulo.textContent = "Templos Grandes";
    return templo.area >= templosGrandes
});

configFiltro("#pequenos", templo => {
    titulo.textContent = "Templos Pequenos";
    return templo.area <= templosPequenos
});
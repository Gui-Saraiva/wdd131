let txtContador = document.querySelector("p");
let contador = 0;

window.addEventListener("load", function () {
    contador = Number(localStorage.getItem("contador")) || 0;
    contador++;
    localStorage.setItem("contador", contador);
    txtContador.innerHTML = `Total de ${contador} avaliações.`;
});
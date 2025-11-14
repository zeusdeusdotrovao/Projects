const copoPrincipal = document.querySelector(".imagem-copo");
const botoes = document.querySelectorAll(".botao-menu");
const circulo = document.querySelector(".circulo");

// Imagens grandes que serão trocadas
const imagensGrandes = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png"
];

// Cores correspondentes a cada imagem
const cores = [
    "#017143", // verde
    "#eb7495", // rosa
    "#d752b1"  // roxo
];

// Para cada miniatura, aplicar os efeitos
botoes.forEach((botao, index) => {

    botao.addEventListener("mouseover", () => {

        // troca a imagem grande
        copoPrincipal.src = imagensGrandes[index];

        // muda a cor do círculo
        circulo.style.background = cores[index];

        // efeito de opacidade para todas miniaturas
        botoes.forEach(b => b.style.opacity = "0.5");

        // miniatura atual fica mais clara
        botao.style.opacity = "1";
    });

    botao.addEventListener("mouseout", () => {

        // ao sair do mouse, volta tudo ao normal
        botoes.forEach(b => b.style.opacity = "1");
    });
});

const counter = document.getElementById("counter");
const button = document.getElementById("clickBtn");
const loja = document.getElementById("loja");
const buyBtn = document.getElementById("clickBtnComprar1");
const buyBtn2 = document.getElementById("clickBtnComprar2");
const buyBtn3 = document.getElementById("clickBtnComprar3");
const buyBtn4 = document.getElementById("clickBtnComprar4");
const buyBtn5 = document.getElementById("clickBtnComprar5");
const titulo = document.getElementById("h1");
const itemBackground = document.getElementById("itemBackground");
const musica = document.getElementById("musica");
const mixer = document.getElementById("mixer");


let pontos = 0;
let comprado1 = false;
let comprado2 = false;
let comprado3 = false;
let comprado4 = false;
let comprado5 = false;

let autoAtivo = false;
let intervalo;

// botão de clique
button.addEventListener("click", () => {
  pontos++;
  counter.textContent = pontos;

  verificarDesbloqueios();
});

// botão comprar
buyBtn.addEventListener("click", () => {

  if (pontos >= 10 && !comprado1) {

    comprado1 = true;

    // desconta 10 pontos
    pontos -= 10;
    counter.textContent = pontos;

    // mostra título
    titulo.style.display = "block";

    // bloqueia compra
    buyBtn.disabled = true;
    buyBtn.textContent = "Comprado";
  }
});

buyBtn2.addEventListener("click", () => {

  if (pontos >= 50 && !comprado2) {

    comprado2 = true;

    // desconta pontos
    pontos -= 50;
    counter.textContent = pontos;

    // aplica fundo
    document.body.classList.add("background");

    // trava botão
    buyBtn2.disabled = true;
    buyBtn2.textContent = "Comprado";
  }

});

buyBtn3.addEventListener("click", () => {

  if (pontos >= 70 && !comprado3) {

    comprado3 = true;

    // desconta pontos
    pontos -= 70;
    counter.textContent = pontos;

    musica.volume = 0.7;
    musica.currentTime = 0;
    musica.play();
    

    // trava botão
    buyBtn3.disabled = true;
    buyBtn3.textContent = "Comprado";
  }

});

buyBtn4.addEventListener("click", () => {

  if (pontos >= 25 && !comprado4) {

    comprado4 = true;

    // desconta pontos
    pontos -= 25;
    counter.textContent = pontos;

    mixer.style.display = "block";

    // trava botão
    buyBtn4.disabled = true;
    buyBtn4.textContent = "Comprado";
  }

});

buyBtn5.addEventListener("click", () => {

  if (pontos >= 100 && !comprado5) {

    comprado5 = true;

    // desconta pontos
    pontos -= 100;
    counter.textContent = pontos;

    if (!autoAtivo) {

        autoAtivo = true;

        intervalo = setInterval(() => {
            pontos += 1;
            counter.textContent = pontos;
        }, 500); // 500ms = 1 segundo
    }

    // trava botão
    buyBtn5.disabled = true;
    buyBtn5.textContent = "Comprado";
  }

});

// PAUSAR / RESUMIR
toggleMusic.addEventListener("click", () => {

    if (musica.paused) {
        musica.play();
        toggleMusic.textContent = "⏸ Pausar Música";
    } else {
        musica.pause();
        toggleMusic.textContent = "▶️ Tocar Música";
    }

});

// CONTROLE DE VOLUME (mixer)
volumeSlider.addEventListener("input", () => {
    musica.volume = volumeSlider.value;
});



function verificarDesbloqueios() {
  
    // libera a loja com 5 pontos
    if (pontos >= 5) {
        loja.style.display = "block";
    }  
    if (pontos >= 10 && !comprado1) {
        document.getElementById("itemTitulo").style.display = "block";
    }

    if (pontos >= 20 && !comprado2) {
        itemBackground.style.display = "block";
    }

    if (pontos >= 45 && !comprado3) {
        itemMusica.style.display = "block";
    }

    if (pontos >= 15 && comprado3) {
        itemMixer.style.display = "block";
    }

    if (comprado4) {
        toggleMusic.style.display = "block";
        volumeSlider.style.display = "block";
    }

    if (pontos >= 70 && !comprado5) {
        itemAutoClicker.style.display = "block";
    }

}
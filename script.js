const counter = document.getElementById("counter");
const button = document.getElementById("clickBtn");
const store = document.getElementById("store");
const buyBtn = document.getElementById("clickBtnPurchase1");
const buyBtn2 = document.getElementById("clickBtnPurchase2");
const buyBtn3 = document.getElementById("clickBtnPurchase3");
const buyBtn4 = document.getElementById("clickBtnPurchase4");
const buyBtn5 = document.getElementById("clickBtnPurchase5");
const title = document.getElementById("h1");
const itemBackground = document.getElementById("itemBackground");
const music = document.getElementById("music");
const mixer = document.getElementById("mixer");

let points = 0;
let purchased1 = false;
let purchased2 = false;
let purchased3 = false;
let purchased4 = false;
let purchased5 = false;

let autoActive = false;
let interval;

// click button
button.addEventListener("click", () => {
  points++;
  counter.textContent = points;

  checkUnlocks();
});

// buy button
buyBtn.addEventListener("click", () => {

  if (points >= 10 && !purchased1) {

    purchased1 = true;

    points -= 10;
    counter.textContent = points;

    title.style.display = "block";

    buyBtn.disabled = true;
    buyBtn.textContent = "Comprado";
  }
});

buyBtn2.addEventListener("click", () => {

  if (points >= 50 && !purchased2) {

    purchased2 = true;

    points -= 50;
    counter.textContent = points;

    document.body.classList.add("background");

    buyBtn2.disabled = true;
    buyBtn2.textContent = "Comprado";
  }

});

buyBtn3.addEventListener("click", () => {

  if (points >= 70 && !purchased3) {

    purchased3 = true;

    points -= 70;
    counter.textContent = points;

    music.volume = 0.7;
    music.currentTime = 0;
    music.play();
    
    buyBtn3.disabled = true;
    buyBtn3.textContent = "Comprado";
  }

});

buyBtn4.addEventListener("click", () => {

  if (points >= 25 && !purchased4) {

    purchased4 = true;

    points -= 25;
    counter.textContent = points;

    mixer.style.display = "block";

    buyBtn4.disabled = true;
    buyBtn4.textContent = "Comprado";
  }

});

buyBtn5.addEventListener("click", () => {

  if (points >= 100 && !purchased5) {

    purchased5 = true;

    points -= 100;
    counter.textContent = points;

    if (!autoActive) {

        autoActive = true;

        interval = setInterval(() => {
            points += 1;
            counter.textContent = points;
        }, 500); // 500ms = 1 sec
    }

    buyBtn5.disabled = true;
    buyBtn5.textContent = "Comprado";
  }

});

// PAUSE / RESUME
toggleMusic.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        toggleMusic.textContent = "⏸ Pausar Música";
    } else {
        music.pause();
        toggleMusic.textContent = "▶️ Tocar Música";
    }

});

// MIXER
volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value;
});

function checkUnlocks() {
  
    // Unlock the store with 5 points.
    if (points >= 5) {
        store.style.display = "block";
    }  
    if (points >= 10 && !purchased1) {
        document.getElementById("itemTitle").style.display = "block";
    }

    if (points >= 20 && !purchased2) {
        itemBackground.style.display = "block";
    }

    if (points >= 45 && !purchased3) {
        itemMusic.style.display = "block";
    }

    if (points >= 15 && purchased3) {
        itemMixer.style.display = "block";
    }

    if (purchased4) {
        toggleMusic.style.display = "block";
        volumeSlider.style.display = "block";
    }

    if (points >= 70 && !purchased5) {
        itemAutoClicker.style.display = "block";
    }
}
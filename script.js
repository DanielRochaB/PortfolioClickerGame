const counter = document.getElementById("counter");
const button = document.getElementById("clickBtn");
const store = document.getElementById("store");
const buyBtn = document.getElementById("clickBtnPurchase1");
const buyBtn2 = document.getElementById("clickBtnPurchase2");
const buyBtn3 = document.getElementById("clickBtnPurchase3");
const buyBtn4 = document.getElementById("clickBtnPurchase4");
const buyBtn5 = document.getElementById("clickBtnPurchase5");
const buyBtn6 = document.getElementById("clickBtnPurchase6");
const title = document.getElementById("h1");
const itemBackground = document.getElementById("itemBackground");
const music = document.getElementById("music");
const mixer = document.getElementById("mixer");
const lang = document.getElementById("lang");
const flagIcon = document.getElementById("flagIcon");

let points = 0;
let autoActive = false;
let interval;
let currentLang = "pt";
let purchased1 = false;
let purchased2 = false;
let purchased3 = false;
let purchased4 = false;
let purchased5 = false;
let purchased6 = false;

const unlockedItems = {
    title: false,
    background: false,
    music: false,
    mixer: false,
    autoClicker: false,
    language: false
};

//Translations
const translations = {
    pt: {
        click: "Clique aqui",
        store: "Loja",
        buy: "Desbloquear",
        unlocked: "Desbloqueado",
        title: "Portfólio: O jogo Clicker",
        itemTitle: "Desbloquear Título (10 Cliques)",
        itemBackground: "Desbloquear Background (50 Cliques)",
        itemMusic: "Desbloquear musica (70 Cliques)",
        itemMixer: "Desbloquear Mixer (25 Cliques)",
        pauseMusic: "⏸ Pausar Música",
        playMusic: "▶️ Tocar Música",
        itemAutoClicker: "Desbloquear Auto Clicker (100 Cliques)",
        itemLanguage: "Desbloquear Linguagem (30 Cliques)"
        
    },
    en: {
        click: "Click here",
        store: "Store",
        buy: "Unlock",
        unlocked: "Unlocked",
        title: "Portfolio: The Clicker Game",
        itemTitle: "Unlock Title (10 Clicks)",
        itemBackground: "Unlock Background (50 Clicks)",
        itemMusic: "Unlock Music (70 Clicks)",
        itemMixer: "Unlock Mixer (25 Clicks)",
        pauseMusic: "⏸ Pause Music",
        playMusic: "▶️ Play Music",
        itemAutoClicker: "Unlock Auto Clicker (100 Clicks)",
        itemLanguage: "Unlock Language (30 Clicks)"
    }
};


//Click button
button.addEventListener("click", () => {
  points++;
  counter.textContent = points;

  checkUnlocks();
});

//Title
buyBtn.addEventListener("click", () => {

  if (points >= 10 && !purchased1) {

    purchased1 = true;

    points -= 10;
    counter.textContent = points;

    title.style.display = "block";

    buyBtn.disabled = true;

    unlockedItems.title = true;
    updateLanguage();
  }
});

//Background
buyBtn2.addEventListener("click", () => {

  if (points >= 50 && !purchased2) {

    purchased2 = true;

    points -= 50;
    counter.textContent = points;

    document.body.classList.add("background");

    buyBtn2.disabled = true;

    unlockedItems.background = true;
    updateLanguage();
  }

});

//Music
buyBtn3.addEventListener("click", () => {

  if (points >= 70 && !purchased3) {

    purchased3 = true;

    points -= 70;
    counter.textContent = points;

    music.volume = 0.7;
    music.currentTime = 0;
    music.play();
    
    buyBtn3.disabled = true;

    unlockedItems.music = true;
    updateLanguage();
  }

});

//Mixer
buyBtn4.addEventListener("click", () => {

  if (points >= 25 && !purchased4) {

    purchased4 = true;

    points -= 25;
    counter.textContent = points;

    mixer.style.display = "block";

    buyBtn4.disabled = true;

    unlockedItems.mixer = true;
    updateLanguage();
  }

});

//Autoclicker
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

    unlockedItems.autoClicker = true;
    updateLanguage();
  }

});

//Language
buyBtn6.addEventListener("click", () => {

  if (points >= 30 && !purchased6) {

    purchased6 = true;

    points -= 30;
    counter.textContent = points;

    lang.style.display = "block";

    buyBtn6.disabled = true;

    unlockedItems.language = true;
    updateLanguage();
  }

});

lang.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pt" : "en";
    updateLanguage();
    flagIcon.src = currentLang === "pt" ? "/assets/images/us.png" : "/assets/images/br.png";
});


// PAUSE / RESUME
toggleMusic.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        toggleMusic.textContent = translations[currentLang].pauseMusic;
    } else {
        music.pause();
        toggleMusic.textContent = translations[currentLang].playMusic;
    }

});

// Volume slider
volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value;
});

function unlockItem(itemKey, button) {
    unlockedItems[itemKey] = true;

    button.disabled = true;

    updateLanguage();
}

function updateLanguage() {
    document.getElementById("clickBtn").textContent = translations[currentLang].click;
    document.querySelector("#store h2").textContent = translations[currentLang].store;
    document.getElementById("h1").textContent = translations[currentLang].title;

    // Translate text item
    document.getElementById("itemTitleText").textContent =
        translations[currentLang].itemTitle;

    document.getElementById("itemBackgroundText").textContent =
        translations[currentLang].itemBackground;

    document.getElementById("itemMusicText").textContent =
        translations[currentLang].itemMusic;

    document.getElementById("itemMixerText").textContent =
        translations[currentLang].itemMixer;

    document.getElementById("itemAutoClickerText").textContent =
        translations[currentLang].itemAutoClicker;

    document.getElementById("itemLanguageText").textContent =
        translations[currentLang].itemLanguage;

    // Update buttons
    buyBtn.textContent =
        unlockedItems.title
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;

    buyBtn2.textContent =
        unlockedItems.background
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;

    buyBtn3.textContent =
        unlockedItems.music
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;

    buyBtn4.textContent =
        unlockedItems.mixer
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;

    if (!music.paused) {
        toggleMusic.textContent = translations[currentLang].pauseMusic;
    } else {
        toggleMusic.textContent = translations[currentLang].playMusic;
    }

    buyBtn5.textContent =
        unlockedItems.autoClicker
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;

    buyBtn6.textContent =
        unlockedItems.language
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;
}

function checkUnlocks() {
  
    // Unlock the store with 5 points.
    if (points >= 5) {
        store.style.display = "block";
    }  
    if (points >= 10 && !purchased1) {
        document.getElementById("itemTitle").style.display = "block";
    }

    if (points >= 30 && !purchased2) {
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

    if (points >= 15 && !purchased6) {
        itemLanguage.style.display = "block";
    }
}
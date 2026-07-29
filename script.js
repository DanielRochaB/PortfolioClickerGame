const counter = document.getElementById("counter");
const button = document.getElementById("clickBtn");
const store = document.getElementById("store");
const buyBtn = document.getElementById("clickBtnPurchase1");
const buyBtn2 = document.getElementById("clickBtnPurchase2");
const buyBtn3 = document.getElementById("clickBtnPurchase3");
const buyBtn4 = document.getElementById("clickBtnPurchase4");
const buyBtn5 = document.getElementById("clickBtnPurchase5");
const buyBtn6 = document.getElementById("clickBtnPurchase6");
const buyBtn7 = document.getElementById("clickBtnPurchase7");
const title = document.getElementById("h1");
const music = document.getElementById("music");
const mixer = document.getElementById("mixer");
const lang = document.getElementById("lang");
const flagIcon = document.getElementById("flagIcon");
const portfolioText = document.getElementById("portfolioText");
const portfolioText2 = document.getElementById("portfolioText2");

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
let purchased7 = false;

const unlockedItems = {
    title: false,
    music: false,
    mixer: false,
    autoClicker: false,
    language: false,
    betterVisual: false,
    portfolio: false
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
        itemBetterVisual: "Desbloquear Visual Melhorado (50 Cliques)",
        itemMusic: "Desbloquear Música (70 Cliques)",
        itemMixer: "Desbloquear Mixer (25 Cliques)",
        pauseMusic: "⏸ Pausar Música",
        playMusic: "▶️ Tocar Música",
        itemAutoClicker: "Desbloquear Auto Clicker (100 Cliques)",
        itemLanguage: "Desbloquear Linguagem (30 Cliques)",
        itemPortfolio: "Desbloquear Portfólio (200 Cliques)",
        
        expTitle: "Desenvolvedor de Chatbots | Inteligência Artificial | JavaScript",
        educationTitle: "🎓 Formação Acadêmica",
        educationUniversity: "Universidade de Santa Cruz do Sul (UNISC)",
        educationDegree: "Bacharelado",
        aboutTitle: "👋 Sobre Mim",
        aboutText1: 'Profissional com mais de <strong>3 anos de experiência</strong> no desenvolvimento de chatbots e soluções de Inteligência Artificial.',
        aboutText2: 'Atuei na criação e manutenção de assistentes virtuais, integração de APIs e desenvolvimento de soluções utilizando Google Cloud Platform e IA Generativa, sempre seguindo metodologias ágeis e boas práticas de desenvolvimento.',

        experienceTitle: "Experiência Profissional",
        jobTitle: "Desenvolvedor de Chatbots",

        exp1: "Desenvolvimento e manutenção de chatbots.",
        exp2: "Desenvolvimento em JavaScript.",
        exp3: "Prompt Engineering para IA Generativa.",
        exp4: "Google Cloud Platform (GCP) e Vertex AI.",
        exp5: "Integração de APIs e serviços externos.",
        exp6: "Metodologia Scrum.",

        skillsTitle: "Competências",

        skill1: "Desenvolvimento de Chatbots",
        skill2: "Soluções Conversacionais",
        skill3: "Integração de APIs",
        skill4: "Prompt Engineering",
        skill5: "Google Cloud Platform",
        skill6: "IA Generativa",
        skill7: "Vertex AI",
        skill8: "Gemini",
        skill9: "Blip",
        skill10: "Twilio",
        skill11: "Zendesk",
        skill12: "GitHub",
        skill13: "Scrum",

        languagesTitle: "Linguagens",
        languages: "JavaScript, Java e Python.",

        experience2Title: "Experiência",

        experience1: "Desenvolvimento de chatbots.",
        experience2: "Integração de APIs.",
        experience3: "Manutenção e evolução de aplicações.",
        experience4: "Desenvolvimento de funcionalidades e automações.",

        highlightsTitle: "Destaques",

        highlight1: "3+ anos de experiência profissional.",
        highlight2: "Experiência em IA Generativa.",
        highlight3: "Prompt Engineering.",
        highlight4: "JavaScript",
        highlight5: "Blip",
        highlight6: "Metodologias Ágeis (Scrum).",

        contactTitle: "Contato"
    },
    en: {
        click: "Click here",
        store: "Store",
        buy: "Unlock",
        unlocked: "Unlocked",
        title: "Portfolio: The Clicker Game",
        itemTitle: "Unlock Title (10 Clicks)",
        itemBetterVisual: "Unlock Better Visual (50 Clicks)",
        itemMusic: "Unlock Music (70 Clicks)",
        itemMixer: "Unlock Mixer (25 Clicks)",
        pauseMusic: "⏸ Pause Music",
        playMusic: "▶️ Play Music",
        itemAutoClicker: "Unlock Auto Clicker (100 Clicks)",
        itemLanguage: "Unlock Language (30 Clicks)",
        itemPortfolio: "Unlock Portfolio (200 Clicks)",
        
        expTitle: "Chatbot Developer | Artificial Intelligence | JavaScript",
        educationTitle: "🎓 Education",
        educationUniversity: "University of Santa Cruz do Sul (UNISC)",
        educationDegree: "Bachelor's Degree",
        aboutTitle: "👋 About Me",
        aboutText1: 'Professional with over <strong>3 years of experience</strong> developing chatbots and Artificial Intelligence solutions.',
        aboutText2: 'Experienced in developing and maintaining virtual assistants, integrating APIs, and building solutions using Google Cloud Platform and Generative AI while following agile methodologies and software development best practices.',

        experienceTitle: "Professional Experience",
        jobTitle: "Chatbot Developer",

        exp1: "Development and maintenance of chatbots.",
        exp2: "JavaScript development.",
        exp3: "Prompt Engineering for Generative AI.",
        exp4: "Google Cloud Platform (GCP) and Vertex AI.",
        exp5: "API and external service integration.",
        exp6: "Scrum methodology.",

        skillsTitle: "Skills",

        skill1: "Chatbot Development",
        skill2: "Conversational AI Solutions",
        skill3: "API Integration",
        skill4: "Prompt Engineering",
        skill5: "Google Cloud Platform",
        skill6: "Generative AI",
        skill7: "Vertex AI",
        skill8: "Gemini",
        skill9: "Blip",
        skill10: "Twilio",
        skill11: "Zendesk",
        skill12: "GitHub",
        skill13: "Scrum",

        languagesTitle: "Languages",
        languages: "JavaScript, Java and Python.",

        experience2Title: "Experience",

        experience1: "Chatbot development.",
        experience2: "API integration.",
        experience3: "Application maintenance and enhancement.",
        experience4: "Development of new features and automation.",

        highlightsTitle: "Highlights",

        highlight1: "3+ years of professional experience.",
        highlight2: "Experience with Generative AI.",
        highlight3: "Prompt Engineering.",
        highlight4: "JavaScript",
        highlight5: "Blip",
        highlight6: "Agile Methodologies (Scrum).",

        contactTitle: "Contact"
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

//BetterVisual 
buyBtn2.addEventListener("click", () => {
     if (points >= 50 && !purchased2) { 
        purchased2 = true; 
        points -= 50; 
        counter.textContent = points; 
        
        buyBtn2.disabled = true; 
        
        unlockedItems.betterVisual = true; 
        updateLanguage(); 

        // ativa visual melhorado
        document.body.classList.add("better-visual");
        activateBetterVisual();

        // seta
        const arrow = document.getElementById("nextArrow");
        const arrow2 = document.getElementById("nextArrow2");
        const arrow3 = document.getElementById("nextArrow3");

        arrow.style.display = "block";
        arrow2.style.display = "block";
        arrow3.style.display = "block";

        gsap.to([arrow, arrow2, arrow3], {
            scale: 1.1,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            transformOrigin: "center",
            ease: "power1.inOut"
        });
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
                checkUnlocks();
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

// Lang pt/en
lang.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pt" : "en";
    updateLanguage();
    flagIcon.src = currentLang === "pt" ? "./assets/images/us.png" : "./assets/images/br.png";
});


// Pause / Resume
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

// Portfolio
buyBtn7.addEventListener("click", () => {
    if (points >= 200 && !purchased7) {

        purchased7 = true;

        points -= 200;
        counter.textContent = points;

        buyBtn7.disabled = true;

        portfolioText.style.visibility = "visible";
        portfolioText2.style.visibility = "visible";

        unlockedItems.portfolio = true;
        updateLanguage();
    }
});


// FUNCTIONS

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

    document.getElementById("itemBetterVisualText").textContent =
        translations[currentLang].itemBetterVisual;

    document.getElementById("itemMusicText").textContent =
        translations[currentLang].itemMusic;

    document.getElementById("itemMixerText").textContent =
        translations[currentLang].itemMixer;

    document.getElementById("itemAutoClickerText").textContent =
        translations[currentLang].itemAutoClicker;

    document.getElementById("itemLanguageText").textContent =
        translations[currentLang].itemLanguage;

    document.getElementById("itemPortfolioText").textContent =
        translations[currentLang].itemPortfolio;

    // Update buttons
    buyBtn.textContent =
        unlockedItems.title
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;

    buyBtn2.textContent =
        unlockedItems.betterVisual
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

    buyBtn7.textContent =
        unlockedItems.portfolio
            ? translations[currentLang].unlocked
            : translations[currentLang].buy;

    const ids = [
        "expTitle",
        "educationTitle",
        "educationUniversity",
        "educationDegree",
        "aboutTitle",
        "aboutText1",
        "aboutText2",

        "experienceTitle",
        "jobTitle",
        "exp1",
        "exp2",
        "exp3",
        "exp4",
        "exp5",
        "exp6",

        "skillsTitle",
        "skill1",
        "skill2",
        "skill3",
        "skill4",
        "skill5",
        "skill6",
        "skill7",
        "skill8",
        "skill9",
        "skill10",
        "skill11",
        "skill12",
        "skill13",

        "languagesTitle",
        "languages",

        "experience2Title",
        "experience1",
        "experience2",
        "experience3",
        "experience4",

        "highlightsTitle",
        "highlight1",
        "highlight2",
        "highlight3",
        "highlight4",
        "highlight5",
        "highlight6",

        "contactTitle"
    ];

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element && translations[currentLang][id]) {
            element.innerHTML = translations[currentLang][id];
        }
    });

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
        itemBetterVisual.style.display = "block";
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
    
    if (points >= 100 && purchased2) {
        itemPortfolio.style.display = "block";
    }

}

 function activateBetterVisual() {

    // ativa GSAP
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector(".horizontal-container");

    gsap.to(container, {

        x: () => -(container.scrollWidth - window.innerWidth),

        ease: "none",

        scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top top",
            end: () => "+=" + container.scrollWidth,
            scrub: 1,
            pin: true
        }
    });
} 


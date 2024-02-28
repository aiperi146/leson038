// 1. Создать страницу с переключателем языков (любой набор языков, например En / Ru / Kg) в виде кнопок, ссылок или ещё как-то. Оформление страницы на ваше усмотрение

const greeting = document.getElementById('greeting');
const enBtn = document.getElementById('enBtn');
const ruBtn = document.getElementById('ruBtn');
const kgBtn = document.getElementById('kgBtn');


const greetings = {
    en: 'Hello, World!',
    ru: 'Привет, мир!',
    kg: 'Салам дүйнө!'
};


let currentLanguage = 'en';

function updateGreeting() {
    greeting.textContent = greetings[currentLanguage];
}


enBtn.addEventListener('click', () => {
    currentLanguage = 'en';
    updateGreeting();
});

ruBtn.addEventListener('click', () => {
    currentLanguage = 'ru';
    updateGreeting();
});

kgBtn.addEventListener('click', () => {
    currentLanguage = 'kg';
    updateGreeting();
});


updateGreeting();
// 2. Положить в проект JSON-файлы, каждый из которых соответствует одному из языков. Внутри JSON-данных описаны одни и те же слова (например "человек", "дом", "хлеб") на соответствующем языке.
JSON = {
    "man": "man",
    "house": "house",
    "bread": "bread"
}
 
JSON ={
    "man": "человек",
    "house": "дом",
    "bread": "хлеб"
}

JSON = {
    "man": "адам",
    "house": "үй",
    "bread": "нан"
}


const languages = ['en', 'ru', 'kg'];
let currentLanguage1 = 'en';
let dictionary = {};


async function loadLanguage(language) {
    const response = await fetch(`${language}.json`);
    if (!response.ok) {
        throw new Error(`Failed to load language data for ${language}`);
    }
    const data = await response.json();
    dictionary[language] = data;
}


async function loadLanguages() {
    try {
        await Promise.all(languages.map(loadLanguage));
        updateGreeting();
    } catch (error) {
        console.error(error.message);
    }
}


function updateGreeting() {
    greeting.textContent = dictionary[currentLanguage]['man']; 
}


enBtn.addEventListener('click', () => {
    currentLanguage = 'en';
    updateGreeting();
});

ruBtn.addEventListener('click', () => {
    currentLanguage = 'ru';
    updateGreeting();
});

kgBtn.addEventListener('click', () => {
    currentLanguage = 'kg';
    updateGreeting();
});

loadLanguages();
/* 3. При выборе одного из языков подгружается соответствующий JSON-файл и слова их него отображаются на странице. Для очевидности можно снабдить их картинками или эмодзи, например отсюда https://getemoji.com/ (ниже пример для итальянского языка)
🧑 persona
🏠 casa
🍞 pane */
const languages1 = ['en', 'ru', 'kg'];
let currentLanguage2 = 'en';

async function loadLanguage(language) {
    const response = await fetch(`${language}.json`);
    if (!response.ok) {
        throw new Error(`Failed to load language data for ${language}`);
    }
    return await response.json();
}


async function updateWords() {
    const wordsDiv = document.getElementById('words');
    wordsDiv.innerHTML = '';

    try {
        const languageData = await loadLanguage(currentLanguage);
        for (const key in languageData) {
            const wordDiv = document.createElement('div');
            const emoji = languageData[key];
            wordDiv.textContent = `${emoji} ${key}`;
            wordsDiv.appendChild(wordDiv);
        }
    } catch (error) {
        console.error(error.message);
    }
}

document.getElementById('enBtn').addEventListener('click', async () => {
    currentLanguage = 'en';
    await updateWords();
});

document.getElementById('ruBtn').addEventListener('click', async () => {
    currentLanguage = 'ru';
    await updateWords();
});

document.getElementById('kgBtn').addEventListener('click', async () => {
    currentLanguage = 'kg';
    await updateWords();
});


updateWords();
// 4. Выбранный язык должен сохраняться при перезагрузке страницы или закрытии/открытии вкладки
const languages2 = ['en', 'ru', 'kg'];
let currentLanguage3 = localStorage.getItem('selectedLanguage') || 'en'; // Проверяем сохраненное значение или используем английский язык по умолчанию


function saveLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
}

async function loadLanguage(language) {
    const response = await fetch(`${language}.json`);
    if (!response.ok) {
        throw new Error(`Failed to load language data for ${language}`);
    }
    return await response.json();
}


async function updateWords() {
    const wordsDiv = document.getElementById('words');
    wordsDiv.innerHTML = '';

    try {
        const languageData = await loadLanguage(currentLanguage);
        for (const key in languageData) {
            const wordDiv = document.createElement('div');
            const emoji = languageData[key];
            wordDiv.textContent = `${emoji} ${key}`;
            wordsDiv.appendChild(wordDiv);
        }
    } catch (error) {
        console.error(error.message);
    }
}

document.getElementById('enBtn').addEventListener('click', async () => {
    currentLanguage = 'en';
    saveLanguage(currentLanguage);
    await updateWords();
});

document.getElementById('ruBtn').addEventListener('click', async () => {
    currentLanguage = 'ru';
    saveLanguage(currentLanguage);
    await updateWords();
});

document.getElementById('kgBtn').addEventListener('click', async () => {
    currentLanguage = 'kg';
    saveLanguage(currentLanguage);
    await updateWords();
});


updateWords();

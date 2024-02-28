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

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

function handleMenuClick(menuItem) {
    if (menuItem === 'about') {
        window.location.href = 'aboutme.html'; // Відкрити сторінку aboutme.html
    } else if (menuItem === 'news') {
        window.location.href = 'news.html'; // Відкрити сторінку news.html
    } else if (menuItem === 'vpu29') {
        window.location.href = 'https://vpu29.lviv.ua/';
    }}
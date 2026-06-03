// Início: Menu

const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('link-menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('aberto');
    hamburguer.classList.toggle('aberto');
});

// Fim: Menu
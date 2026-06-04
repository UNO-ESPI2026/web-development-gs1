// Início: Menu

const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('link-menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('aberto');
    hamburguer.classList.toggle('aberto');
});

// Fim: Menu

// Início: Slideshow 

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 2500)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

// Fim: Slideshow

// Início: Formulário

const form = document.getElementById('contato-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validarFormulario()) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    }
});

function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const validacaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === '') {
        alert('Por favor, informe seu nome.');
        return false;
    }

    if (email === '') {
        alert('Por favor, informe seu e-mail.');
        return false;
    }

    if (!validacaoEmail.test(email)) {
        alert('Por favor, informe um e-mail válido.');
        return false;
    }

    if (assunto === '') {
        alert('Por favor, informe o assunto.');
        return false;
    }

    if (mensagem === '') {
        alert('Por favor, escreva sua mensagem.');
        return false;
    }

    return true;
}

// Fim: Formulário
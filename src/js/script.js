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
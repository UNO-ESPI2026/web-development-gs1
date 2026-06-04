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

// Início: Quiz

const perguntas = [
    {
        pergunta: "Qual satélite é utilizado pelo Zenit para monitoramento agrícola?",
        opcoes: ["Hubble", "Sentinel-2", "James Webb", "Voyager 1"],
        correta: 1
    },
    {
        pergunta: "O que significa a sigla NDVI?",
        opcoes: [
            "Nível De Vegetação Inteligente",
            "Núcleo De Valores Integrados",
            "Índice de Vegetação por Diferença Normalizada",
            "Navegação De Vegetação por Imagem"
        ],
        correta: 2
    },
    {
        pergunta: "Qual microcontrolador é utilizado no Zenit Sensor?",
        opcoes: ["Raspberry Pi", "ESP32", "Arduino UNO", "BBC Micro:bit"],
        correta: 2
    },
    {
        pergunta: "Qual dos seguintes dados NÃO é coletado pelo Zenit Sensor?",
        opcoes: ["Umidade do solo", "pH do solo", "Velocidade do vento", "Temperatura"],
        correta: 2
    },
    {
        pergunta: "O que é microgravidade?",
        opcoes: [
            "Ausência total de gravidade",
            "Condição de gravidade muito reduzida, como na ISS",
            "Gravidade subterrânea",
            "Tipo de solo agrícola"
        ],
        correta: 1
    },
    {
        pergunta: "Qual ODS está diretamente relacionado à proposta do Zenit para agricultores?",
        opcoes: ["ODS 7 — Energia limpa", "ODS 2 — Fome zero", "ODS 4 — Educação", "ODS 6 — Água potável"],
        correta: 1
    },
    {
        pergunta: "Qual empresa opera a constelação de satélites Starlink?",
        opcoes: ["NASA", "Blue Origin", "SpaceX", "Boeing"],
        correta: 2
    },
    {
        pergunta: "O que o NDVI próximo de 1 indica?",
        opcoes: [
            "Solo seco e improdutivo",
            "Alta atividade fotossintética e vegetação saudável",
            "Presença de água no solo",
            "Temperatura superficial elevada"
        ],
        correta: 1
    },
    {
        pergunta: "Quantos agricultores familiares existem no Brasil aproximadamente?",
        opcoes: ["500 mil", "1,5 milhão", "3,9 milhões", "10 milhões"],
        correta: 2
    },
    {
        pergunta: "Qual é o principal objetivo do Zenit Web para pesquisadores espaciais?",
        opcoes: [
            "Vender imagens de satélite",
            "Controlar drones agrícolas",
            "Fornecer padrões de cultivo eficiente para microgravidade",
            "Emitir alertas climáticos"
        ],
        correta: 2
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

function iniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    respondeu = false;
    document.getElementById('quiz-card').style.display = 'flex';
    document.getElementById('quiz-resultado').classList.remove('visivel');
    renderizarPergunta();
}

function renderizarPergunta() {
    const dados = perguntas[perguntaAtual];
    respondeu = false;

    document.getElementById('quiz-pergunta').textContent = dados.pergunta;
    document.getElementById('quiz-progresso-texto').textContent =
        'Pergunta ' + (perguntaAtual + 1) + ' de ' + perguntas.length;

    const opcoes = document.getElementById('quiz-opcoes');
    opcoes.innerHTML = '';

    dados.opcoes.forEach(function(opcao, index) {
        const btn = document.createElement('button');
        btn.classList.add('quiz-opcao');
        btn.textContent = opcao;
        btn.addEventListener('click', function() {
            selecionarOpcao(index, btn);
        });
        opcoes.appendChild(btn);
    });

    const proximo = document.getElementById('quiz-proximo');
    proximo.disabled = true;
    proximo.textContent = perguntaAtual === perguntas.length - 1 ? 'Ver resultado' : 'Próxima';
}

function selecionarOpcao(index, btnClicado) {
    if (respondeu) return;
    respondeu = true;

    const dados = perguntas[perguntaAtual];
    const botoes = document.querySelectorAll('.quiz-opcao');

    botoes.forEach(function(btn, i) {
        btn.disabled = true;
        if (i === dados.correta) {
            btn.classList.add('correta');
        }
    });

    if (index === dados.correta) {
        pontuacao++;
        btnClicado.classList.add('correta');
    } else {
        btnClicado.classList.add('errada');
    }

    document.getElementById('quiz-proximo').disabled = false;
}

document.getElementById('quiz-proximo').addEventListener('click', function() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        renderizarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    document.getElementById('quiz-card').style.display = 'none';
    const resultado = document.getElementById('quiz-resultado');
    resultado.classList.add('visivel');

    document.getElementById('resultado-titulo').textContent =
        'Você acertou ' + pontuacao + ' de ' + perguntas.length + '!';
}

document.getElementById('quiz-reiniciar').addEventListener('click', function() {
    iniciarQuiz();
});

iniciarQuiz();

// Fim: Quiz
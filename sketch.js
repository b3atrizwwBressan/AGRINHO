const Skin = document.querySelector('.Skin');

let xJogando = -100; // posição horizontal inicial
let yJogador = -80;   // posição vertical inicial
const teclasPressionadas = {};

// --- CENÁRIOS ---
const CENARIO_1 = "url('IMAGEM DE FUNDO 1.png')";
const CENARIO_2 = "url('fundo de imagem 2.gif')";
const CENARIO_3 = "url('Post by @akkotta · 1 image.gif')"; 
const CENARIO_4 = "url('cenario 4.gif')"; 
const CENARIO_5 = "url('cenario 5.gif')"; 
const CENARIO_6 = "url('cenario 6.gif')"; 
const CENARIO_7 = "url('cenario 7.gif')";

// Adicione a imagem do novo cenário 3 na pasta
let cenarioAtual = 1;

function posicaoPersonagem() {
    Skin.style.left = `${xJogando}px`;
    Skin.style.bottom = `${yJogador}px`;
}

// Aplica a posição inicial ao carregar a página
posicaoPersonagem();

document.addEventListener('keydown', (event) => {
    teclasPressionadas[event.key] = true;

    // Movimento
    
    if (event.key === 'a') {
        xJogando -= 15;
        if (xJogando < -100) xJogando = -100; // Limite na borda esquerda
        Skin.style.transform = "scaleX(-1)";
        posicaoPersonagem();
        // Verifica se a Skin encostou na borda esquerda do novo cenário
        const gameBoard = document.querySelector('.game-board');
        const skinRect = Skin.getBoundingClientRect();
        const boardRect = gameBoard.getBoundingClientRect();
        // --- Troca de cenário para esquerda ---
        if (cenarioAtual > 1 && skinRect.left <= boardRect.left) {
            cenarioAtual--;
            gameBoard.style.backgroundImage = eval(`CENARIO_${cenarioAtual}`);
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = gameBoard.offsetWidth - Skin.offsetWidth;
            posicaoPersonagem();
        } else if (cenarioAtual === 3 && skinRect.left <= boardRect.left) {
            gameBoard.style.backgroundImage = CENARIO_2;
            cenarioAtual = 2;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = gameBoard.offsetWidth - Skin.offsetWidth;
            posicaoPersonagem();
        } else if (cenarioAtual === 4 && skinRect.left <= boardRect.left) {
            gameBoard.style.backgroundImage = CENARIO_3;
            cenarioAtual = 3;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = gameBoard.offsetWidth - Skin.offsetWidth;
            posicaoPersonagem();
        } else if (cenarioAtual === 5 && skinRect.left <= boardRect.left) {
            gameBoard.style.backgroundImage = CENARIO_4;
            cenarioAtual = 4;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = gameBoard.offsetWidth - Skin.offsetWidth;
            posicaoPersonagem();
        } else if (cenarioAtual === 6 && skinRect.left <= boardRect.left) {
            gameBoard.style.backgroundImage = CENARIO_5;
            cenarioAtual = 5;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = gameBoard.offsetWidth - Skin.offsetWidth;
            posicaoPersonagem();
        } else if (cenarioAtual === 7 && skinRect.left <= boardRect.left) {
            gameBoard.style.backgroundImage = CENARIO_6;
            cenarioAtual = 6;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = gameBoard.offsetWidth - Skin.offsetWidth;
            posicaoPersonagem();
        }
    }
    if (event.key === 'd') {
        xJogando += 15;
        Skin.style.transform = "scaleX(1)";
        posicaoPersonagem();
        const gameBoard = document.querySelector('.game-board');
        const skinRect = Skin.getBoundingClientRect();
        const boardRect = gameBoard.getBoundingClientRect();
        // Troca de cenário para direita
        if (cenarioAtual < 7 && skinRect.right >= boardRect.right) {
            cenarioAtual++;
            gameBoard.style.backgroundImage = eval(`CENARIO_${cenarioAtual}`);
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = 0;
            posicaoPersonagem();
        } else if (cenarioAtual === 1 && skinRect.right >= boardRect.right) {
            gameBoard.style.backgroundImage = CENARIO_2;
            cenarioAtual = 2;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = 0;
            posicaoPersonagem();
        } else if (cenarioAtual === 2 && skinRect.right >= boardRect.right) {
            gameBoard.style.backgroundImage = CENARIO_3;
            cenarioAtual = 3;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = 0;
            posicaoPersonagem();
        } else if (cenarioAtual === 3 && skinRect.right >= boardRect.right) {
            gameBoard.style.backgroundImage = CENARIO_4;
            cenarioAtual = 4;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = 0;
            posicaoPersonagem();
        } else if (cenarioAtual === 4 && skinRect.right >= boardRect.right) {
            gameBoard.style.backgroundImage = CENARIO_5;
            cenarioAtual = 5;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = 0;
            posicaoPersonagem();
        } else if (cenarioAtual === 5 && skinRect.right >= boardRect.right) {
            gameBoard.style.backgroundImage = CENARIO_6;
            cenarioAtual = 6;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = 0;
            posicaoPersonagem();
        } else if (cenarioAtual === 6 && skinRect.right >= boardRect.right) {
            gameBoard.style.backgroundImage = CENARIO_7;
            cenarioAtual = 7;
            atualizaVisibilidadePersonagensPrincipais();
            xJogando = 0;
            posicaoPersonagem();
        }
    }

    // Andar só se não estiver pressionando W e S juntos
    if (teclasPressionadas['w'] && teclasPressionadas['s']) {
        Skin.classList.remove('andar');
    } else if (event.key === 'w' || event.key === 's') {
        Skin.classList.add('andar');
    }

    // Pular só com espaço
    if (event.key === ' ') {
        Skin.classList.add('jump');
        setTimeout(() => {
            Skin.classList.remove('jump');
        }, 500);
    }
});

document.addEventListener('keyup', (event) => {
    teclasPressionadas[event.key] = false;
    if (event.key === 'a' || event.key === 'd') {
        Skin.classList.remove('andar');
    }
});


const COELHO = document.querySelector('.COELHO');
let xCoelho = 650;
let yCoelho = 25;

function posicaoCoelho() {
    COELHO.style.left = `${xCoelho}px`;
    COELHO.style.bottom = `${yCoelho}px`;
} 
posicaoCoelho();


const ABELHA = document.querySelector('.ABELHA');
let xAbelha = 200;
let yAbelha = 330;

function posicaoAbelha() {
    ABELHA.style.right = `${xAbelha}px`;
    ABELHA.style.bottom = `${yAbelha}px`;
} 
posicaoAbelha();

// --- ITENS COLETÁVEIS E ALEATÓRIOS NO CENÁRIO 2 ---
const cana = document.querySelector('.CANA');
const trigo = document.querySelector('.TRIGO');
const cogumelo = document.querySelector('.COGUMELO');
if (cana) cana.style.display = 'none';
if (trigo) trigo.style.display = 'none';
if (cogumelo) cogumelo.style.display = 'none';

function posicionaItemAleatorio(item) {
    const larguraBoard = document.querySelector('.game-board').offsetWidth;
    const minX = 0;
    const maxX = larguraBoard - 80;
    item.style.left = Math.floor(Math.random() * (maxX - minX) + minX) + 'px';
    item.style.display = 'block';
}

// Função para repor item após tempo maior (ex: 2 segundos)
function reporItemDepois(item, tempoMs) {
    setTimeout(() => {
        posicionaItemAleatorio(item);
    }, tempoMs);
}

document.addEventListener('keydown', (event) => {
    teclasPressionadas[event.key] = true;
    // ...movimento e troca de cenário...
    // --- ITENS COLETÁVEIS NO CENÁRIO 2 e 3 ---
    if (cenarioAtual === 2 || cenarioAtual === 3) {
        [cana, trigo, cogumelo].forEach(item => {
            if (item && item.style.display === 'none' && !item.dataset.jaPosicionado) {
                posicionaItemAleatorio(item);
                item.dataset.jaPosicionado = '1';
            }
        });
        [[cana, 'cana'], [trigo, 'trigo'], [cogumelo, 'cogumelo']].forEach(([item]) => {
            if (item && item.style.display !== 'none') {
                const skinRect = Skin.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();
                if (!(skinRect.right <= itemRect.left || skinRect.left >= itemRect.right || skinRect.bottom <= itemRect.top || skinRect.top >= itemRect.bottom)) {
                    item.style.display = 'none';
                    setTimeout(() => {
                        posicionaItemAleatorio(item);
                        item.dataset.jaPosicionado = '1';
                    }, 2000);
                }
            }
        });
    } else {
        [cana, trigo, cogumelo].forEach(item => {
            if (item) { item.style.display = 'none'; delete item.dataset.jaPosicionado; }
        });
    }
});

// --- FIM DA EXPERIÊNCIA NO CENÁRIO 6 ---
const gameBoard = document.querySelector('.game-board');
let mensagemFim = document.getElementById('mensagem-fim');
if (cenarioAtual === 6) {
    Skin.style.display = 'none';
    if (!mensagemFim) {
        mensagemFim = document.createElement('div');
        mensagemFim.id = 'mensagem-fim';
        mensagemFim.textContent = 'Fim da experiência';
        mensagemFim.style.position = 'absolute';
        mensagemFim.style.top = '50%';
        mensagemFim.style.left = '50%';
        mensagemFim.style.transform = 'translate(-50%, -50%)';
        mensagemFim.style.fontSize = '3rem';
        mensagemFim.style.color = '#fff';
        mensagemFim.style.textShadow = '2px 2px 8px #000';
        mensagemFim.style.zIndex = '1000';
        gameBoard.appendChild(mensagemFim);
    }
} else {
    Skin.style.display = '';
    if (mensagemFim && mensagemFim.parentNode) {
        mensagemFim.parentNode.removeChild(mensagemFim);
    }
}

// --- Apenas a Skin aparece do cenário 3 em diante ---
function atualizaVisibilidadePersonagensPrincipais() {
    const vaca = document.querySelector('.VACA');
    const coelho = document.querySelector('.COELHO');
    const abelha = document.querySelector('.ABELHA');
    const visivel = cenarioAtual === 1;
    [vaca, coelho, abelha].forEach(p => { if (p != null) p.style.display = visivel ? '' : 'none'; });
}


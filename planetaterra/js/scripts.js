/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Em qual idade geológica ocorreu a formação da Terra?",
    alternativaA : "Pré-Cambriana",
    alternativaB : "Paleozoica",
    alternativaC : "Mesozoica",
    alternativaD : "Cambriana",
    correta      : "Pré-Cambriana",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual o elemento responsável pela movimentação das placas tectônicas situadas na litosfera terrestre?",
    alternativaA : "Núcleo",
    alternativaB : "Silício",
    alternativaC : "Magnésio",
    alternativaD : "Magma",
    correta      : "Magma",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual é o nome do processo pelo qual a Terra absorve a radiação solar e a emite na forma de calor, mantendo a temperatura do planeta adequada para a vida?",
    alternativaA : "Gravidade.",
    alternativaB : "Efeito Estufa.",
    alternativaC : "Radiação.",
    alternativaD : "Fotossíntese.",
    correta      : "Efeito Estufa.",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é o fenômeno natural que ocorre quando a Lua se alinha entre a Terra e o Sol, bloqueando a luz solar e criando uma sombra na Terra?",
    alternativaA : "Eclipse solar.",
    alternativaB : "Eclipse lunar.",
    alternativaC : "Aurora boreal.",
    alternativaD : "Equinócio.",
    correta      : "Eclipse solar.",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "O conjunto de ecossistemas presentes na Terra é corretamente chamado de",
    alternativaA : "hidrosfera.",
    alternativaB : "meio natural.",
    alternativaC : "biosfera.",
    alternativaD : "meio natural.",
    correta      : "biosfera.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "As estações do ano são uma das principais consequências do movimento terrestre de",
    alternativaA : "rotação.",
    alternativaB : "translação.",
    alternativaC : "mutação.",
    alternativaD : "formação",
    correta      : "translação.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Os dois principais movimentos executados pelo planeta Terra são rotação e translação. O entendimento sobre seus mecanismos de funcionamento é de extrema importância porque, na dinâmica de seus funcionamentos, eles provocam consequências que repercutem diretamente no modo como as sociedades se organizam e produzem o seu espaço. Respectivamente, esses movimentos provocam as seguintes consequências diretas no espaço geográfico do Planeta Terra:",
    alternativaA : "Os diferentes fusos horários no planeta Terra, a alternância de dias e noites e as diferentes estações do ano; consequentemente, influenciam na distribuição de luz solar na Terra e nos seus diferentes tipos climáticos.",
    alternativaB : "Os diferentes fusos horários, a alternância de diferentes latitudes e controlam a emissão e propagação dos gases poluentes no planeta Terra; consequentemente, influenciam diretamente no chamado efeito estufa.",
    alternativaC : "O movimento das placas tectônicas, as diferentes estações do ano e o controle das diferentes latitudes no planeta Terra; consequentemente, influenciam nos abalos sísmicos que ocorrem ao norte e ao sul do paralelo do Equador.",
    alternativaD : "O movimento das placas tectônicas, a alternância de diferentes latitudes e controlam a entrada e saída de energia solar no planeta Terra; consequentemente, atuam diretamente para o aumento do aquecimento global.",
    correta      : "Os diferentes fusos horários no planeta Terra, a alternância de dias e noites e as diferentes estações do ano; consequentemente, influenciam na distribuição de luz solar na Terra e nos seus diferentes tipos climáticos.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "A Suíça possui uma área de 41.293 Km2, uma população absoluta estimada em 7 milhões de habitantes, uma renda per capita de 33.150 dólares e uma densidade demográfica de 143 hab/Km2. A partir destes dados você conclui que o país é:",
    alternativaA : "populoso e povoado.",
    alternativaB : "povoado.",
    alternativaC : "superpovoado.",
    alternativaD : "opuloso e superpovoado.",
    correta      : "povoado.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "A Terra possui uma forma esférica e ligeiramente achatada, cuja estrutura foi desvendada através de estudos utilizando propagações de ondas sísmicas. De acordo com as medições, o planeta apresenta as camadas crosta, manto e núcleo. Sobre as camadas da Terra é INCORRETO afirmar que",
    alternativaA : "A crosta terrestre é a camada superficial, irregular e extremamente fina do planeta.",
    alternativaB : "O núcleo é a camada mais profunda, de maior temperatura e pressão.",
    alternativaC : "O manto é a camada de maior espessura e composta por silicatos de ferro e magnésio..",
    alternativaD : "Entre as camadas existem fronteiras que as separam e recebem o nome de estremaduras.",
    correta      : "Entre as camadas existem fronteiras que as separam e recebem o nome de estremaduras.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Israel possui 22.000 Km2 e uma população de 5.500.000 habitantes e uma renda per capita de 13.220 dólares. Calcule a densidade demográfica.",
    alternativaA : "25hab/Km2",
    alternativaB : "150 hab/Km2",
    alternativaC : "250hab/Km2",
    alternativaD : "2.500 hab/Km2",
    correta      : "250hab/Km2",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}

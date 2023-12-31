const input = document.getElementById("inputNum")
const botao = document.querySelector('.check')
const p = document.querySelector('.message')
const body = document.querySelector('body')
const highscore = document.querySelector('.highscore')
const botaoAgain = document.querySelector('.again');
const number = document.querySelector('.number')
let score = document.querySelector('.score')
let count = 20;

Number(score)
let numAleatorio = Math.trunc(Math.random() * 20) + 1;

/* Iniciando as funções do botão check do jogo */
botao.addEventListener('click', function jogoFunc() {
    if (count <= 20 && count > 1) {
        if (Number(input.value) > 20 || Number(input.value) <= 0) {
            alert("Digite um numero entre 0 e 20!")
            return
        }
        if (Number(input.value) === numAleatorio) {   /* Se o numero for acertado */
            p.textContent = "Acertou!!! Very cool!!! ✅✅✅"
            number.textContent = numAleatorio
            body.style.backgroundColor = "#16f006";
            //highscore muda se o score for maior
            if (Number(score.textContent) > Number(highscore.textContent)) {
                highscore.textContent = score.textContent
            }
        } else if (Number(input.value) < numAleatorio) { /* Aqui ele passa para o usuario que esta abaixo do random/ */
            count--; //discontando o score                                           
            score.textContent = count
            p.textContent = "Errou... o numero Está acima ⬆️  "

        } else if (Number(input.value) > numAleatorio) { /* Passa que o numero esta acima do numero randomico */
            count--;
            score.textContent = count
            p.textContent = "Errou... o numero Está abaixo⬇️ "
        }
    }
    else { /* Se as chaces forem esgotadas */
        p.textContent = "Game Over💣💣🔥🔥"
        number.textContent = numAleatorio
        botao.removeEventListener('click', jogoFunc);
        body.style.backgroundColor = 'red'
        score.textContent = 0;
    }

})
//função again "zerando" o codigo e voltando aos padrões iniciais
botaoAgain.addEventListener('click', () => {
    input.value = ''
    number.textContent = '?'
    numAleatorio = Math.trunc(Math.random() * 20) + 1;
    count = 20;
    score.textContent = count
    p.textContent = "Start guessing..."
    body.style.background = "#222"
})

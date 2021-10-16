let result = document.querySelector('section#result')
let computer = 0
let player = 0

function drawNumber() {
    let minimum = 1
    let maximum = 100
    let diffuser = maximum - minimum
    let random = Math.random()
    computer = minimum + Math.trunc(diffuser * random)
}

function guessNumber() {
    player = Number(window.prompt("Qual é o se palpite?"))
    if (player < computer) {
        result.innerHTML += `<p>Você falou ${player}. Meu número é MAIOR!</p>`
    } else if (player > computer) {
        result.innerHTML += `<p>Você falou ${player}. Meu número é MENOR!</p>`
    } else if (player == computer) {
        result.innerHTML += `<p>Você acertou! Eu tinha sorteado o valor ${computer}!</p>`
        document.getElementById('button').style.visibility = 'hidden'
    }
}
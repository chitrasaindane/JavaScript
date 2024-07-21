let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {

    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    })

}

function validateGuess(guess) {

    if (isNaN(guess)) {
        alert('please enter a Valid Number')
    }
    else if (guess < 1) {
        alert('Please enter the number between 1 & 100')
    }
    else if (guess > 100) {
        alert('Please enter the number between 1 & 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number Was ${random}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {

 if(guess === random){
    displayMessage('You Guessed is Right')
    endGame()
 }
 else if (guess < random){
    displayMessage('Number is low')
 }
 else if (guess > random){
    displayMessage('Number is high')
 }

}

function displayGuess(guess) {

userinput.value=''
guessSlot.innerHTML += `${guess} `
numGuess++ ;
remaining.innerHTML = `${11- numGuess}`

}

function displayMessage(message) {

    lowOrHi.innerHTML=`<h2>${message}</h2>`
}



function endGame() {
userinput.value=''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame">New Game</h2>`
startOver.appendChild(p)
playGame = false
newGame()
}

function newGame() {
    newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click' , function(e){
        random = parseInt(Math.random() * 100 + 1);
        prevGuess =[]
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML=`${11-numGuess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
    
        playGame=true
    
    })
    }
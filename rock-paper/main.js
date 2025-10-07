// create a function that returns either 'rock' 'paper 'scissors' randomly


let randomInt = ''
let computerMove = ""
let humanScore = 0
let computerScore = 0
const div = document.querySelector('div')
const pElement = document.querySelector('p')
function random () {
  randomInt = Math.random()
  return randomInt
}



function getComputerChoice () {
  
  random()
  if (randomInt <= 0.333) {
    computerMove = 'rock'
  } else if (randomInt > 0.333 && randomInt < 0.667) {
    computerMove = 'paper'
  } else if (randomInt > 0.667) {
    computerMove = 'scissors'
  }
  return computerMove
}



let humanChoice = ""
const buttons = document.querySelectorAll('button')

buttons.forEach(button =>{
  button.addEventListener('click', () =>{
    humanChoice = button.textContent
    console.log(humanChoice);
    
  })
})
  







function playRound(humanChoice, computerMove) {
  if (humanChoice === computerMove) {
    pElement.textContent = "It's a tie!";
  } else if (humanChoice === 'rock' && computerMove === 'paper') {
    pElement.textContent = "You lose! Paper beats rock.";
    computerScore++;
  } else if (humanChoice === 'rock' && computerMove === 'scissors') {
    pElement.textContent = "You win! Rock beats scissors.";
    humanScore++;
  } else if (humanChoice === 'paper' && computerMove === 'scissors') {
    pElement.textContent = "You lose! Scissors beats paper.";
    computerScore++;
  } else if (humanChoice === 'paper' && computerMove === 'rock') {
    pElement.textContent = "You win! Paper beats rock.";
    humanScore++;
  } else if (humanChoice === 'scissors' && computerMove === 'paper') {
    pElement.textContent = "You win! Scissors beats paper.";
    humanScore++;
  } else if (humanChoice === 'scissors' && computerMove === 'rock') {
    pElement.textContent = "You lose! Rock beats scissors.";
    computerScore++;
  }


  div.textContent = `Computer Score: ${computerScore} — Human Score: ${humanScore}`;
}




function playGame() {
getComputerChoice()
playRound(humanChoice, computerMove)

if (humanScore === 5){
  pElement.textContent = `You won! human: 5 -- computer: ${computerScore}`
  humanScore = 0
  computerScore = 0
} else if (computerScore === 5) {
  pElement.textContent = `You lost! human: ${humanScore} -- computer: 5`
  humanScore = 0
  computerScore = 0
}


}
buttons.forEach(button => {
  button.addEventListener('click', () => {
    playGame()
  })
})
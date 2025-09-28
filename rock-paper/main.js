// create a function that returns either 'rock' 'paper 'scissors' randomly


let randomInt = ''
let computerMove = ""
let humanScore = 0
let computerScore = 0
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

console.log(randomInt);
console.log(getComputerChoice());


let humanChoice = ""

function getHumanChoice () {
  humanChoice = prompt("what's your move?", 'rock').toLowerCase()
  return humanChoice
}





function playRound (humanChoice, computerMove) {
  if (humanChoice == computerMove) {
    console.log('its a tie!')
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`)
  } else if (humanChoice == 'rock' && computerMove == 'paper') {
    console.log('you lose! paper beats rock');
    computerScore++
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`)
    
  } else if (humanChoice == 'rock' && computerMove == 'scissors') {
    console.log('you win! rock beats scissors');
    humanScore++
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`)
  } else if (humanChoice == 'paper' && computerMove == 'scissors') {
    console.log('you lose! scissors beats paper');
    computerScore++
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`)
  } else if (humanChoice == 'paper' && computerMove == 'rock') {
    console.log('you win! paper beats rock');
    humanScore++
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`)
  } else if (humanChoice == 'scissors' && computerMove == 'paper') {
    console.log('you win! scissors beats paper');
    humanScore++
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`)
  } else if (humanChoice == 'scissors' && computerMove == 'rock') {
    console.log('you lose! rock beats scissors');
    computerScore++
    console.log(`Computer Score: ${computerScore} -- Human Score: ${humanScore}`)
  }


}




function playGame() {

for (let i = 0; i < 5; i++) {
  getComputerChoice()
  getHumanChoice()
  playRound(humanChoice, computerMove)
}

if (computerScore > humanScore) {
  console.log('YOU LOST!');
  
} else if (computerScore < humanScore) {
  console.log('YOU WON!');
  
} else {console.log('ITS A TIE!');
}
}


playGame()
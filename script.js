console.log("hello:welcome to Rock-Paper-Scissors")

function getComputerChoice() {
    let val = Math.floor((Math.random() * 3) + 1)
    if (val == 1){
        return "rock"
    }
    else if(val == 2) {
        return "paper"
    }
    else{
        return "scissors"
    }
}

//console.log(getComputerChoice())


function getHumanChoice () {
    let choice = prompt("enter rock, paper or scissors")
    return choice.toLowerCase()
}

//console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice , computerChoice) {  // we got to pass the choices. cant do it inside the function
    console.log("you chose: " + humanChoice)
    console.log("computer chose: " + computerChoice)
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("draw")
        }
        else if (computerChoice == "scissors") {
            humanScore += 1 
            console.log("you won")
            console.log(humanChoice + " beats " + computerChoice)
        }
        else if (computerChoice == "paper") {
            computerScore += 1
            console.log("computer won")
            console.log(computerChoice + " beats " + humanChoice)

        }    
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1
            console.log("you won")
            console.log(humanChoice + " beats " + computerChoice)

        }
        else if (computerChoice == "scissors") {
            computerScore += 1
            console.log("computer won")
            console.log(computerChoice + " beats " + humanChoice)


        }
        else if (computerChoice == "paper") {
            console.log("draw")
        }    
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore += 1
            console.log("computer won")
            console.log(computerChoice + " beats " + humanChoice)

        }
        else if (computerChoice == "scissors") {
            console.log("draw")
        }
        else if (computerChoice == "paper") {
            
            humanScore += 1 
            console.log("you won")
            console.log(humanChoice + " beats " + computerChoice)

        }    
    }
}

// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()

//playRound(humanSelection, computerSelection)   // must be called to be executed man

function playGame () {
    for (let i = 0; i < 5 ; i++) {
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()
        playRound(humanSelection, computerSelection)
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`)

    }

    if (humanScore > computerScore) {
        console.log("you won")
    }
    else if ( humanScore < computerScore){
        console.log("computer won")
    }
    else {
        console.log("draw")
    }
}

playGame()
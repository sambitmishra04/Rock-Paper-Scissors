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

console.log(getComputerChoice())
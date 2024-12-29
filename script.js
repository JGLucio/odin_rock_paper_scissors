function getComputerChoice(){
    const random = Math.random();

    if (random <= 1/3){
        return "rock";
    } else if(random <= 2/3){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = "";
    while(choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors"){
        choice = prompt("Choose between rock, paper or scissors")
    }

    return choice;
}


function playRound(humanChoice, computerChoice){
    let end = false;
    while(end != true){
        if(humanChoice == "rock"){
            if(computerChoice == "scissors"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
                end = true;
            } else if(computerChoice == "paper"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                end = true;
            } else {
                console.log("Draw!")
                end = true;
            }
        } else if(humanChoice == "paper"){
            if(computerChoice == "rock"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
                end = true;
            } else if(computerChoice == "scissors"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                end = true;
            } else {
                console.log("Draw!")
                end = true;
            }
        } else if(humanChoice == "scissors"){
            if(computerChoice == "paper"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
                end = true;
            } else if(computerChoice == "rock"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                end = true;
            } else {
                console.log("Draw!")
                end = true;
            }
        } else {
            console.log("humanChoice is not a valid parameter")
            end = true;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){


    let humanSelection = "";
    let computerSelection = "";

    let rounds = 1;
    for(rounds;rounds<=5;rounds++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore >> computerScore){
        console.log(`You won! ${humanScore} vs ${computerScore}`);
    } if (humanScore == computerScore){
        console.log(`You draw. ${humanScore} vs ${computerScore}`);
    } else {
        console.log(`You lost. ${humanScore} vs ${computerScore}`)
    }

}

playGame();


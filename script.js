let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const result = document.querySelector(".result");

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
    
        if(humanChoice == "rock"){
            if(computerChoice == "scissors"){
                humanScore++;
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}. ${humanScore} vs ${computerScore}`;

            } else if(computerChoice == "paper"){
                computerScore++;
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}. ${humanScore} vs ${computerScore}`;

            } else {
                result.textContent = `Draw!. ${humanScore} vs ${computerScore}`;
                
            }
        } else if(humanChoice == "paper"){
            if(computerChoice == "rock"){
                humanScore++;
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}. ${humanScore} vs ${computerScore}`;

            } else if(computerChoice == "scissors"){
                computerScore++;
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}. ${humanScore} vs ${computerScore}`;

            } else {
                result.textContent = `Draw!. ${humanScore} vs ${computerScore}`;
                
            }
        } else if(humanChoice == "scissors"){
            if(computerChoice == "paper"){
                humanScore++;
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}. ${humanScore} vs ${computerScore}`;

            } else if(computerChoice == "rock"){
                computerScore++;
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}. ${humanScore} vs ${computerScore}`;

            } else {
                result.textContent = `Draw!. ${humanScore} vs ${computerScore}`;
                
            }
        } else {
            console.log("humanChoice is not a valid parameter")
            
        }

    if (humanScore == 5){
        result.textContent = ``;
        alert(`You won! ${humanScore} vs ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        result.textContent = ``;
        alert(`You lost. ${humanScore} vs ${computerScore}`);
        humanScore = 0;
        computerScore = 0;
    }

}


function playRoundRock(){
    const playerChoice = "rock";
    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);
}

function playRoundPaper(){
    const playerChoice = "paper";
    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);
}

function playRoundScissors(){
    const playerChoice = "scissors";
    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);
}


rockBtn.addEventListener("click", playRoundRock);
paperBtn.addEventListener("click", playRoundPaper);
scissorsBtn.addEventListener("click", playRoundScissors);


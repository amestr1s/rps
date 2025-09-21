console.log("Hello World")
let max = 3;

function getComputerChoice (max) {
    return Math.floor(Math.random() * max);
}
let choice = getComputerChoice(max);
console.log (choice); //checking correct string conversion

function getString (choice) {
    if (choice === 0) {
    choice = "rock";
} else if (choice === 1) {
    choice = "paper";
} else {
    choice = "scissors";
} return choice;
}
console.log(getString(choice));

let hchoice = prompt("Choose and enter a value between rock, paper, scissors");
console.log(hchoice); //checking correct input transition through getHumanChoice

function getHumanChoice (hchoice) {
    if ((hchoice.toLowerCase()) === "rock") {
    hchoice = hchoice;
    } else if ((hchoice.toLowerCase()) === "paper") {
    hchoice = hchoice;
    } else if ((hchoice.toLowerCase()) === "scissors") {
    hchoice = hchoice;
    } else {
    hchoice = "invalid reload the page";
    } return (hchoice.toLowerCase());
}

console.log(getHumanChoice(hchoice));

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    
}
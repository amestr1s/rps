console.log("Hello World")
let max = 3;
function getComputerChoice (max) {
    return Math.floor(Math.random() * max);
}
let choice = getComputerChoice(max);
console.log (choice);

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
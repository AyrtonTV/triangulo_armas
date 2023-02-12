function getComputerChoice(){
    const armas = ["Espada", "Hacha", "Lanza"];
    return armas[Math.floor(Math.random() * armas.length)];
}

const playerSelection = "Espada";
const computerSelection = getComputerChoice();

console.log(computerSelection);

function playRound(playerSelection, computerSelection){
    if((playerSelection == "Espada" && computerSelection == "Hacha") ||
    (playerSelection == "Hacha" && computerSelection == "Lanza") || 
    (playerSelection == "Lanza" && computerSelection == "Espada")){
        return `Ganaste! ${playerSelection} vence a ${computerSelection}`;
    }
    else if((playerSelection == "Hacha" && computerSelection == "Espada") ||
    (playerSelection == "Lanza" && computerSelection == "Hacha") || 
    (playerSelection == "Espada" && computerSelection == "Lanza")){
        return `Perdiste, ${computerSelection} vence a ${playerSelection}`;
    }
    else if(playerSelection === computerSelection){
        return `${playerSelection} VS ${computerSelection}! Es un EMPATE!`
    }
}

console.log(playRound(playerSelection, computerSelection));
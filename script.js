const computerSelection = getComputerChoice();
let jugador = prompt("¿Cuál es tu nombre?");

let playerScore = 0;
let computerScore = 0;
let resultado;

game();

// Genera aleatoriamente una opción para la PC
function getComputerChoice() {
    const armas = ["Espada", "Hacha", "Lanza"];
    return armas[Math.floor(Math.random() * armas.length)];
}

// Juega una ronda
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let playerSelectionTitle = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computerSelectionTitle = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if(playerSelection === computerSelection){
        resultado = `${playerSelectionTitle} VS ${computerSelectionTitle}! Es un EMPATE!`;
    }
    else if((playerSelection == "espada" && computerSelection == "hacha") ||
        (playerSelection == "hacha" && computerSelection == "lanza") ||
        (playerSelection == "lanza" && computerSelection == "espada")){
            resultado =`Ganaste! ${playerSelectionTitle} vence a ${computerSelectionTitle}!`;
    }
    else{
        resultado =`Perdiste! ${computerSelectionTitle} vence a ${playerSelectionTitle}`;
    }
    return resultado;
}

console.log(playerScore);
console.log(computerScore);

// Utiliza playRound() para jugar 5 rondas
function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Elige entre Espada, Lanza o Hacha:").toLowerCase();
        let resultado = playRound(playerSelection, getComputerChoice());

        let playerSelectionTitle = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let computerSelectionTitle = resultado.split(" ")[3].charAt(0).toUpperCase() + resultado.split(" ")[3].slice(1);


        if(resultado.includes("Ganaste")){
            playerScore++;
        }
        else if(resultado.includes("Perdiste")){
            computerScore++;
        }
        console.log(resultado.replace(playerSelection, playerSelectionTitle).replace(computerSelectionTitle, computerSelectionTitle));
        alert(resultado.replace(playerSelection, playerSelectionTitle).replace(computerSelectionTitle, computerSelectionTitle));
    }
}

// Imprime los resultados del juego y el ganador
console.log(`Puntajes: ${jugador}: ${playerScore}, Computadora: ${computerScore}`);
alert(`Puntajes: ${jugador}: ${playerScore}, Computadora: ${computerScore}`);
if(playerScore > computerScore) {
    console.log('¡Felicitaciones! Ganaste el juego.');
    alert("Felicidades, Ganaste el Juego");
    } 
    else if (playerScore < computerScore) {
    console.log('Lo siento, perdiste el juego.');
    alert("Lo siento, perdiste el juego :(");
    } 
    else {
    console.log('¡Empate!');
    alert("Empate!")
    }
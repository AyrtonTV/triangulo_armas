const armas = ["Espada", "Hacha", "Lanza"];

function getComputerChoice(){
    return armas[Math.floor(Math.random() * armas.length)];
}

console.log(getComputerChoice());
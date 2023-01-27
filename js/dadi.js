/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//button
const mybutton = document.getElementById("push");
console.log("buttoooon ", mybutton);

const winner = document.getElementById("game_result");

mybutton.addEventListener("click", function () {

    //random pc
    const randomPCnr = Math.floor(Math.random() * 6) + 1;
    console.log("pc random is ", randomPCnr);

    //random user
    const input_dado = Math.floor(Math.random() * 6) + 1;
    console.log("user random is ", input_dado);

    let victory;

    if (randomPCnr > input_dado) {
        victory = "Il PC vale " + randomPCnr + " mentre il giocatore " + input_dado + " quindi vince PC!"
        console.log("esito ", victory);

    }
    else if (randomPCnr < input_dado) {
        victory = "Il PC vale " + randomPCnr + " mentre il giocatore " + input_dado + " quindi vince giocatore!"
        console.log("esito ", victory);

    }
    else {
        victory = "Il PC vale " + randomPCnr + " mentre il giocatore " + input_dado + " quindi pareggio"
        console.log("esito ", victory);

    }

    winner.innerHTML = victory;

})


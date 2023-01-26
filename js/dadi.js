/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//random pc
const randomPCnr = Math.floor(Math.random() * 6) + 1;
console.log("pc random is ", randomPCnr);

//random user
const input_dado = document.getElementById("user_dado");
console.log("user random is ", input_dado);

//button
const mybutton = document.getElementById("push");
console.log("buttoooon ", mybutton);


mybutton.addEventListener("click", function () {
    const inserimento = input_dado.value;
    console.log("mail output ", inserimento);
})

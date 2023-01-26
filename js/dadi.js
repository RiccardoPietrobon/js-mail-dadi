/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


//button
const mybutton = document.getElementById("push");
console.log("buttoooon ", mybutton);


mybutton.addEventListener("click", function () {

    //random pc
    const randomPCnr = Math.floor(Math.random() * 6) + 1;
    console.log("pc random is ", randomPCnr);

    //random user
    const input_dado = document.getElementById("user_dado").value;
    console.log("user random is ", input_dado);



    for (let i = 0; i > randomPCnr.length; i++) {
        if (randomPCnr[i] > input_dado) {
            let victory = 0;
            console.log("Chi ha vinto?  ", victory);

        }
        else if (randomPCnr[i] == input_dado) {
            let victory = 1;
            console.log("Chi ha vinto?  ", victory);

        }

        else (randomPCnr[i] < input_dado); {
            let victory = 2;
            console.log("Chi ha vinto?  ", victory);

        }
    }


})


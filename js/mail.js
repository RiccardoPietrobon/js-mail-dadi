// Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull'esito del controllo.

//mail di input
const input_mail = document.getElementById("user_mail");
console.log("mail scritta è ", input_mail);

//button
const mybutton = document.getElementById("push");
console.log("buttoooon ", mybutton);

//funzione bottone
mybutton.addEventListener("click", function () {
    const inserimento = input_mail.value;
    console.log("mail output ", inserimento);
})



//elenco delle mail
const mail_list = ["mail1", "mail2", "mail3", "mail4"];
console.log("gli utenti sono ", mail_list);

for (let i = 0; i < mail_list.length; i++) {

    const mail_item = mail_list[i];
    console.log("la mail scelta è ", mail_item);

    if (input_mail != mail_item) {
        console.log("la mail ", input_mail, " non vale")
    }
    else (input_mail == mail_item); {
        console.log("la mail ", input_mail, " vale")
    }


}


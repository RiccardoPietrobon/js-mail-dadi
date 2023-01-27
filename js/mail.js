// Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull'esito del controllo.
//button
const mybutton = document.getElementById("push");
console.log("buttoooon ", mybutton);

mybutton.addEventListener("click", function () {

    //elenco delle mail
    const mail_list = ["mail1", "mail2", "mail3", "mail4"];
    console.log("gli utenti sono ", mail_list);

    //inserisci mail
    const input_mail = document.getElementById("write_mail").value;

    //variabile controllo
    let check_mail = false;

    for (let i = 0; i < mail_list.length; i++) {

        const mail_item = mail_list[i];

        if (mail_item == input_mail) {
            check_mail = true;

            console.log(check_mail);
        }
    }

    if (check_mail) {
        //accesso libero
        console.log("Benvenuyo " + input_mail)
    }

    else; {
        //accesso negato
        console.log("Accesso negato, ritenta con un' altra mail")
    }
})









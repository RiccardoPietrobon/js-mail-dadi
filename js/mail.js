
// Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull'esito del controllo.

//elenco delle mail
const mail_list = ["mail1", "mail2", "mail3", "mail4"];
console.log("gli utenti sono ", mail_list);

for (let i = 0; i < mail_list.length; i++) {

    const mail_item = mail_list[i];
    console.log("la mail scelta è ", mail_item);
}


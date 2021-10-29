// richiedere all'utente l'inserimento di una parola
// prelevare ogni singolo carattere che la compone
// creare una nuova parola inserendo i caratteri nell'ordine contrario
// riscrivere la parola al contrario
// compararla con la parola originariamente scritta dall'utente
// se le due parole combaciano ip ip urrà


const userWord = prompt('inserisci una parola');
let revWord = reverseChars(userWord);

if (revWord === userWord) {
    document.body.innerHTML = `<h3>complimenti ${userWord} è palindroma</h3>`;
} else {
    document.body.innerHTML = `<h3>peccato! ${userWord} NON è palindroma</h3>`;
}


//Dichiarazione funzione
function reverseChars(word) {
    let revWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        revWord += word[i];
    }

    return revWord;
}
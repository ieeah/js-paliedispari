// pari e dispari
// l'utente sceglie se pari o dispari
// l'utente inserisce un numero compreso tra 1 e 5 
// generiamo un numero random da dassegnare al pc (FUNZIONE)
// sommiamo i due numeri
// stabiliamo se la somma dei due numeri è pari o dispari (FUNZIONE)
// dichiariamo il vincitore

let sceltaUtente = '';
let validPrompt = false;
let numeroUtente = 1;

do {
    sceltaUtente = prompt('scrivi "pari" o "dispari" per fare la tua scelta').trim().toLowerCase();
} while ((sceltaUtente !== 'pari') && (sceltaUtente !== 'dispari'));

do {
    numeroUtente = parseInt(prompt('inserisci un numero compreso tra 1 e 5'));
    console.log(numeroUtente)
} while ((isNaN(numeroUtente)) || (numeroUtente < 1) || (numeroUtente > 5))

const numeroPc = getRangeNumber(1, 5);
const somma = numeroUtente + numeroPc;



console.log('scelta', sceltaUtente);
console.log('utente', numeroUtente);
console.log('pc', numeroPc);
console.log('somma', somma);


document.body.innerHTML += `<h3>hai scelto ${sceltaUtente}, e hai scelto il numero ${numeroUtente}</h3>`;
document.body.innerHTML += `<h3>al computer è stato assegnato il numero ${numeroPc}</h3>`;
document.body.innerHTML += `<h3>la somma è ${somma} ed è ${isEven(somma)}`;

if (isEven(somma) === sceltaUtente) {
    document.body.innerHTML += `<h3>HAI VINTO!</h3>`
} else {
    document.body.innerHTML += `<h3>HAI PERSO :( </h3>`
}


// FUNZIONI

function isEven(num) {
    if (num % 2 === 0) {
        return 'pari';
    }

    return 'dispari';
}

function getRangeNumber (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
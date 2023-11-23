// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// Crea un array vuoto 
const array = [];
//e chiedi all'utente un numero da inserire nell'array. 

let somma = 0;
while (somma < 50) {
    let userNumbers = parseInt(prompt('Write a number'));
    array.push (userNumbers);
    somma += userNumbers;
}
console.log (array, 'la somma è:', somma);
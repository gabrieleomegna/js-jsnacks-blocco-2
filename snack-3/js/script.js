// ? Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
// ? Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// Dare la possibilità di inserire due parole. 
const firstWord = prompt('Write first word');
const secondWord = prompt('Write second word');



// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
function sameLengthWord (wordOne, wordTwo) {
    let isSameLength = false;
    if (wordOne.length == wordTwo.length) {
        isSameLength = true;
    }
    return isSameLength;
}


if (sameLengthWord (firstWord,secondWord)) {
    console.log ('The two word have same length:', firstWord, secondWord);
} else if (firstWord.length > secondWord.length) {
    console.log('Longer word is the first:', firstWord);
} else {
    console.log('Longer word is the second:', secondWord);
}



// Se hanno la stessa lunghezza, stamparle entrambe 


//altrimenti stampare la più lunga delle due.

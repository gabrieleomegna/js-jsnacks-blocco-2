// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero 
// inserito dall'utente nel DOM, in qualsiasi forma. 

const userNumber = parseInt(prompt('Type a number'));

const wrapperElement = document.querySelector('div.wrapper');



for (let i = 1; i <= userNumber; i++) {
    wrapperElement.appendChild(generateSquare());
}



function generateSquare () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square-item');
    return squareElement;
}
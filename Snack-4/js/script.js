// ? Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, allora ritorna vero, 
// ? altrimenti ritorna falso. Micro bonus: se sono uguali ritorna il numero.

// Crea una funzione che accetta due numeri, 
function divisibleNumber(firstNumber, secondNumber) {
    // se il primo e' divisibile per il secondo, allora ritorna vero, 
    if (firstNumber % secondNumber === 0) {
        
        //Micro bonus: se sono uguali ritorna il numero.
        if (firstNumber === secondNumber) {
            return firstNumber
        } else {
            return true;
        }
        
    // altrimenti ritorna falso.     
    } else {
        return false;
    }
}

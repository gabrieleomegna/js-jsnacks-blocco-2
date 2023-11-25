// Crea una funzione che accetta due elementi del dom, 
// uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.


function writeInDom (parent, element) {
    parent.appendChild(element);
}

const wrapperElement = document.querySelector ('div.wrapper');
const pElement = document.createElement ('p');
pElement.append('Ciao');
writeInDom(wrapperElement,pElement);
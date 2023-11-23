// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

const arrayNomi = ['Lisa', 'Genoveffa', 'Gertrude', 'Franco', 'Claudio'];
const arrayCognomi = ['Barale', 'Secco', 'Omegna', 'Ginetti', 'Lupo'];
const listaInvitati = [];

for (let i = 0; i < arrayNomi.length; i++) {
    let nameGenerator = arrayNomi[Math.floor(Math.random() * arrayNomi.length)];
    let surnameGenerator = arrayCognomi[Math.floor(Math.random() * arrayCognomi.length)];
    let invitato = nameGenerator + ' ' + surnameGenerator;
    listaInvitati.push (invitato);
    console.log (nameGenerator, surnameGenerator);
    console.log (invitato);
}



console.log (arrayNomi, arrayCognomi);
console.log (listaInvitati);
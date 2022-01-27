// Chiedere 10 volte all'utente un numero

// Imposto variabile i fuori dal ciclo while
let i= 0;

let somma = 0;

//Ciclo while ripete l'operazione fino al raggiungimento del valore 10
while (i < 10 ){
    let usrNumber = parseInt(prompt('Inserisci un numero!'));
    console.log(usrNumber);
    i++; 
    somma += usrNumber;
    console.log(somma);
    
}

let media = somma / 10;
console.log(media);
const h1 = document.getElementById('somma');
const h2 = document.getElementById('media');

h1.innerHTML = "La somma totale e': " + somma + "!";
h2.innerHTML = "La media dei numeri e' :" + media + "!";



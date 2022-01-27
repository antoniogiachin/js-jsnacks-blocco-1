// Chiedo un numero all'utente
let usrNumber = parseInt(prompt('Inserisci un numero a piacere'));
console.log(usrNumber);

let moltiplicatore;
let quadrato;
let listaItems ="";

const h1 = document.getElementById('prompt');

const ul = document.querySelector("ul.list");

for(let i = 0; i <= usrNumber; i++){
    moltiplicatore = usrNumber-i;
    quadrato = moltiplicatore * moltiplicatore;
    console.log(quadrato);

    listaItems = `<li> Eseguo : ${moltiplicatore} * ${moltiplicatore} = ${quadrato} </li>`;
    console.log(listaItems);
    ul.innerHTML += listaItems;
    
}

h1.innerHTML = "Il numero scelto e': " + usrNumber;
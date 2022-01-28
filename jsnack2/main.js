// Chiedo un numero all'utente
let usrNumber = parseInt(prompt('Inserisci un numero a piacere'));
console.log(usrNumber);

let moltiplicatore;
let cubo;
let cuboString = '3';
let listaItems ="";

const h1 = document.getElementById('prompt');

const ul = document.querySelector("ul.list");

let j =0;

let i = 0;

while(usrNumber <= 0 || isNaN(usrNumber)){

    alert('Inserisci un numero valido!');
    window.location.reload();

}

while (i <= usrNumber){
        
    moltiplicatore = usrNumber-i;
    cubo = moltiplicatore * moltiplicatore * moltiplicatore;    
    listaItems = `<li> Eseguo : ${moltiplicatore} * ${cuboString} = ${cubo} </li>`;
    console.log(listaItems);
    ul.innerHTML += listaItems;
    h1.innerHTML = "Il numero scelto e': " + usrNumber;
    i++ ;
     
}
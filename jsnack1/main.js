let i = 0;

let usrNumber;

let sum = 0;

let numberList = '';

while (i < 10){
    
    usrNumber = parseInt(prompt('Inserisci qui i tuoi numeri preferiti!'));
    
    if (isNaN(usrNumber)){
        alert('Inserisci un numero!!!')
    } else {
        sum += usrNumber;
        i++
        numberList += `<li> ${usrNumber}</li>`
        console.log(numberList);
    }

}

console.log(sum);

let sumHtml = document.querySelector('.sum');
sumHtml.innerHTML = `La somma dei numeri scelti è ${sum} !`;

let numberListHtml = document.querySelector('.number-list');
numberListHtml.innerHTML = `
    <p> I numeri scelti sono: </p>
    <ul> ${numberList} </ul>
`;
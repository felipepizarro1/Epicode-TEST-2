/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

function stampare(array){
  for(i=0; array.length>i; i++){
    console.log(array[i]);
  }
  
}

stampare(pets);
console.log("******************************");

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
console.log("******************************");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.sort().reverse();
console.log(pets);
console.log("******************************");
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift());
console.log(pets);
console.log("******************************");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function licensePlate(cars){
  
  for(let i=0; cars.length>i;i++){
    cars[i].targa = 124135351; 
  }

}
licensePlate(cars);
console.log(cars);
console.log("******************************");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.


*/

function aggiungere(cars, brand, model, color, trims){
  cars[cars.length] = {brand : brand, model : model, color: color, trims:[trims]}

}
aggiungere(cars, "Ford", "Mustang", "black", ["allure", "style"] );
console.log("******************************");

function rimuoviTrims(cars){
  for(let i = 0; cars.length>i; i++){
    cars[i].trims.pop();
  }

}
rimuoviTrims(cars);
console.log(cars);
console.log("******************************");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

function salvare(cars){
  for(let i = 0; cars.length>i; i++){
    justTrims[i] = cars[i].trims[0]
  }

}
salvare(cars);
console.log(justTrims)
console.log("******************************");

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i = 0; cars.length>i;i++){
  if(cars[i].color.charAt(0) === "b"){
    console.log("Fizz");
  } else console.log("Buzz");
}

console.log("******************************");

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let count = 0;

while(numericArray.length>count){
  if(numericArray[count]===32){
    count = numericArray.length;
  } else {
    console.log(numericArray[count]);
    count++;
  }
  
  
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let posizione = [];

for(let i = 0; charactersArray.length>i; i++){
  let numero = 0;
  switch(charactersArray[i]){
    case 'g': numero = 7; break;
    case 'n' :numero = 14; break;
    case 'u': numero = 21; break;
    case 'z': numero = 26; break;
    case 'd': numero = 4; break;
  }
  posizione.push(numero)
}


console.log(posizione);
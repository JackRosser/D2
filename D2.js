const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers, numbers.length);

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 17;
let num2 = 18;
if (num2 > num1) {
  console.log("il maggiore tra " + num1 + " e " + num2 + " è " + num2);
} else {
  console.log("il maggiore tra " + num1 + " e " + num2 + " è " + num1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (numbers[0] !== 5) {
  console.log("Exercise 2: not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (numbers[10] % 5 === 0) {
  console.log("Exercise 3: perfectly dibisible by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

numbers.push(18);
let first = numbers[8];
let second = numbers[10];
if (first === 8 || second === 8) {
  console.log("Exercise 4 - Almeno un dei due è uguale a 8");
}
if (first + second === 8 || first - second === 8) {
  console.log("Exercise 4 - La loro addizione/sottrazione è uguale a 8");
} else {
  console.log("Exercise 4 - la loro addizione/sottrazione è diversa da 8");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let shopping = [55, 10, 80, 67, 91];
let delivery = 10;
let totalShoppingCart = shopping[0] + shopping[1] + shopping[2] + shopping[3] + shopping[4] + delivery;
console.log(totalShoppingCart + " prima");
if (shopping[0] + shopping[1] + shopping[2] + shopping[3] + shopping[4] > 50) {
  delivery = 0;
  totalShoppingCart = shopping[0] + shopping[1] + shopping[2] + shopping[3] + shopping[4] + delivery;
  console.log(totalShoppingCart + " dopo");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let newdelivery = 10;
let totalShoppingCartBlackFriday =
  // prettier-ignore
  (shopping[0] - (shopping[0] * 20) / 100) +
  (shopping[1] - (shopping[1] * 20) / 100) +
  (shopping[2] - (shopping[2] * 20) / 100) +
  (shopping[3] - (shopping[3] * 20) / 100) +
  (shopping[4] - (shopping[4] * 20) / 100) + newdelivery;
console.log(totalShoppingCartBlackFriday, "prima");
// prettier-ignore
if  ((shopping[0] - (shopping[0] * 20) / 100) +
(shopping[1] - (shopping[1] * 20) / 100) +
(shopping[2] - (shopping[2] * 20) / 100) +
(shopping[3] - (shopping[3] * 20) / 100) +
(shopping[4] - (shopping[4] * 20) / 100) > 50) {
  newdelivery = 0;
  totalShoppingCartBlackFriday =
  // prettier-ignore
  (shopping[0] - (shopping[0] * 20) / 100) +
  (shopping[1] - (shopping[1] * 20) / 100) +
  (shopping[2] - (shopping[2] * 20) / 100) +
  (shopping[3] - (shopping[3] * 20) / 100) +
  (shopping[4] - (shopping[4] * 20) / 100) + newdelivery;}
console.log(totalShoppingCartBlackFriday, "dopo");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const crescent = [16, 55, 35];
crescent.sort(); // Non è valido per i numeri ma al momento non sappiamo ancora come fare
console.log(crescent);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if (typeof numbers[6] === "number") {
  console.log("è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (numbers[6] % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me, "senza lastName");

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop(2);
console.log(me, "senza css");

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = [];
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.push(9);
myArray.push(10);
console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray.pop();
console.log(myArray);
myArray.push(100);
console.log(myArray);

//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a=14
let b=13

if(a<b){
  console.log("la variabile a è minore della b");
}else{
  console.log("la variabile a è maggiore della b");
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero=14

if(numero <5){
  console.log("Tiny");
}
else if(numero <10){
  console.log("Small");
}
else if(numero <15){
  console.log("Medium");
}
else if(numero <20){
  console.log("Large");
}
else if(numero >=20){
  console.log("Huge");
}
//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let x=0 ; x<11 ; x++) {
  if(x===3 || x===8){
    continue;
  }
  console.log(x);
}
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let y=0 ; y<16 ; y++){
  if(y % 2===0){
    console.log(y,"pari");
  }else{
    console.log(y,"dispari");
  }
  
}
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=8
let num2=0
if(num1===8 || num2===8){
  console.log("uno dei due numeri è uguale a 8");
}
if(num1+num2===8){
  console.log("la somma dà 8");
}
if(num1-num2===8){
  console.log("la sottrazione dà 8");
}
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart=60
let spedizione=10
if(totalShoppingCart>=50){
  console.log(totalShoppingCart ,"spedizione gratuita");
}else{
  console.log(totalShoppingCart+spedizione,"spedizione inclusa");
}
/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let scontoBlackFriday=(totalShoppingCart/100)*20
let totale=totalShoppingCart-scontoBlackFriday
if(totale >= 50){
  console.log(totale,"spedizione gratuita");
}else{
  console.log(totale+spedizione , "spedizione inclusa");
}
/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(let z=0 ; z<101 ; z++){
  if(z%3===0){
    console.log(z,"Fizz");
  }
  if(z%5===0){
    console.log(z,"Buzz");
  }
  if(z%3===0 && z%5===0){
    console.log(z,"FizzBuzz");
  }
}
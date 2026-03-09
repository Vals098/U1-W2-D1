/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//I principali datatype in JS sono:
//Numbers: è utilizzato per memorizzare valori numerici
//es: 56
//Strings: utilizzato per memorizzare righe di testo, va sempre inserito tra apici, singoli o doppi
//es: 'Ciao!' ;
// Attenzione! anche i numeri posono essere considerati stringhe. es: '75'
//Boolean Values: valore che distingue tra solo due possibilità.
//es: true/false
//Empty Values: due valori particolari:
// null -> su usa per descrivere un valore nullo, ovvero che la variabile è vuota. Non c'è valore.
// undefined -> si usa per descrivere un valore non definito, ovvero sconociuto, ma esistente.

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Valeria"
console.log("esercizio 2", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const sum = 12 + 20
console.log("esercizio 3", sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12
console.log("esercizio 4", x)
const y = 4
console.log("esercizio 4 bis", x * y)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//const myName //il sistema da errore
myName = "Farinosi"
console.log("esercizio 5", myName)
console.log("Valeria" !== "Farinosi") //true
console.log("Valeria" === "Farinosi") //false
const year = 1998
//year = 2000 //errore "unexpected identifier" dichiarare una variabile con const non mi permette di cambiare la variabile stessa in futuro

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const subtraction = 4 - x
console.log("esercizio 6", subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john"
let name2 = "John"
console.log("esercizio7", name1 !== name2) //true
//EXTRA:
if ((name2 = "john")) {
  console.log("extra", name1 === name2) //true  CONDITIONALS to make decisions
}

//Scribbles
//ARRAYS
let names = ["Valeria", "Farinosi"]
//array, the variable contains an array that contains a list of values
console.log(names)

//OBJECTS
let person = {
  name: "Valeria",
  surname: "Farinosi", //attenzione alle virgole!!
}
// object, the variable contains an object with multiple properties. In this case a person with name and surname
console.log(person)
//the console shows the property and the value

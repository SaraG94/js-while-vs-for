console.log('ciao')

//ciclo per chiedere all’utente un numero (prompt)
let numero = parseInt(prompt('Ciao, inserisci qui un numero.'))
console.log(numero)

while(isNaN(numero)){
    let numero = parseInt(prompt('Ciao, inserisci qui un numero.'))
}
console.log('un numero!')

let resto = numero % 2
console.log(resto)

let dispari = 0
// Se il numero è dispari
if(resto === 1) {
    //lo salvo in una lista. 
    dispari += numero
}
console.log(dispari)
  
//Continuiamo a chiedere un numero all’utente finchè non avremo 10 numeri dispari
//scartare altri valori (numeri pari ed eventuali NaN).
//Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.
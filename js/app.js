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

const dispari = []
// Se il numero è dispari
if(resto === 1) {
    //lo salvo in una lista. 
    dispari.push(numero)
}
console.log(dispari)
  
//Continuiamo a chiedere un numero all’utente finchè non avremo 10 numeri dispari
//for(let i = 0; i < 10; i++){
//    let i= i+1


//}
//scartare altri valori (numeri pari ed eventuali NaN).
//Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.
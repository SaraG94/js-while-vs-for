console.log('ciao')

//ciclo per chiedere all’utente un numero (prompt)
//let numero = parseInt(prompt('Ciao, inserisci qui un numero.'))
//console.log(numero)

//while(isNaN(numero)){
//    let numero = parseInt(prompt('Ciao, inserisci qui un numero.'))
//}

//let resto = numero % 2;
//console.log(resto)

//const dispari = []
//let i = 0;
// Se il numero è dispari
//if(resto === 1) {
    //lo salvo in una lista. 
//    dispari.push(numero)
//}
//console.log(dispari)
  
//Continuiamo a chiedere un numero all’utente finchè non avremo 10 numeri dispari
//for(let i = 0; i < 10; i++){
//}
//scartare altri valori (numeri pari ed eventuali NaN).
//Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.

/////secondo tentativo


//lista numeri dispari
const dispari = [];
let i = 0;

//ciclo per chiedere all’utente un numero (prompt)
//Continuiamo a chiedere un numero all’utente finchè non avremo 10 numeri dispari
while( dispari.length < 10){
    let numero = parseInt(prompt('Ciao, inserisci qui un numero.'));

    let resto = numero % 2;
    console.log(resto)

    // Se il numero è dispari
    if(resto === 1) {
    //lo salvo in una lista. 
    dispari.push(numero);
    }else if(resto === 0 || isNan(resto)){
        //scartare altri valori (numeri pari ed eventuali NaN).
        console.log('scarta')
    }
    console.log(dispari)
}
console.log(dispari)

//stampa numeri in console

for(let i = 0 ; i <dispari.length; i++){

    const numeriDispari = dispari[i];
    console.log(numeriDispari);
}


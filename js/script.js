//Chiedo il numero dei km
const numKm = prompt("Dimmi quanti chilometri (km) vuoi percorrere");
//debug km
console.log(numKm, typeof numKm, "numero dei km")
//Chiedo l'etá del passeggero
const etaPass = prompt("Dimmi la tua etá");
//debug etá
console.log(etaPass, typeof etaPass, "etá del passeggero");

//creo una costante per il costo al km del biglietto
const costoKm = 0.21;
//credo una variabile per il costo del biglietto
let costoBiglietto = numKm * costoKm ;
//debug costoBiglietto
console.log(costoBiglietto, typeof costoBiglietto, "costo biglietto senza sconto");

//verifico se posso applicare lo sconto
if(etaPass > 65){
    //creo una costante per lo sconto se é over 65
    const scontoOver = costoBiglietto * 0.40;
    //debug sconto
    console.log(scontoOver, typeof scontoOver , "totale sconto da applicare");
    //applico lo sconto al costo del biglietto
    costoBiglietto = costoBiglietto - scontoOver;
    //debug costoBiglietto
    console.log(costoBiglietto, typeof costoBiglietto, "prezzo del biglietto dopo aver applicato lo sconto");
}else if((etaPass < 18)&&(etaPass>= 0)){
    //creo una costante per lo sconto se é minorenne
    const scontoOver = costoBiglietto * 0.20;
    //debug sconto
    console.log(scontoOver, typeof scontoOver, "totale sconto da applicare");
    //applico lo sconto al costo del biglietto
    costoBiglietto = costoBiglietto - scontoOver;
    //debug costoBiglietto
    console.log(costoBiglietto, typeof costoBiglietto, "prezzo del biglietto dopo aver applicato lo sconto");
}else{
    //non applico nessuno sconto e il prezzo rimane quello
}

//Preparo il risultato a due cifre decimali
const result = "Il costo totale del biglietto da pagare é di " + " " + costoBiglietto.toFixed(2) + " " + "euro";
//debug result
console.log(result, typeof result, "prezzo finale da pagare")
//restituisco il prezzo
document.getElementById("risultato").innerHTML = result;

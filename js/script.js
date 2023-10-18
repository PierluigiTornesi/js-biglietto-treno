//Chiedo il numero dei km
const numKm = prompt("Dimmi quanti chilometri (km) vuoi percorrere");
//debug km
console.log(numKm, typeof numKm, "numero dei km")
//Chiedo l'etá del passeggero
const etaPass = prompt("Dimmi la tua etá");
//debug etá
console.log(etaPass, typeof etaPass, "etá del passeggero");
//creo una variabile per restituire il messaggio finale
let message = "";
//creo una costante per il costo al km del biglietto
const costoKm = 0.21;
//credo una variabile per il costo del biglietto
let costoBiglietto = 0;
//verifico se i km sono validi
if(numKm >= 0){
    //calcolo il costo del biglietto
    costoBiglietto = numKm * costoKm ;
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

        //modifico il messaggio da inviare alla fine
        message = `
            <h2>Ciao passeggero </h2> 
            <p> Questo é il costo del tuo biglietto , ${costoBiglietto.toFixed(2)} euro. </p>
            <p> Al biglietto é stato applicato uno sconto del 40% , ovvero é stato detratto questo valore ${scontoOver.toFixed(2)} essendo lei di etá over 65, dato che ha ${etaPass} anni. </p> `;


    }else if((etaPass < 18)&&(etaPass>= 0)){
        //creo una costante per lo sconto se é minorenne
        const scontoOver = costoBiglietto * 0.20;
        //debug sconto
        console.log(scontoOver, typeof scontoOver, "totale sconto da applicare");
        //applico lo sconto al costo del biglietto
        costoBiglietto = costoBiglietto - scontoOver;
        //debug costoBiglietto
        console.log(costoBiglietto, typeof costoBiglietto, "prezzo del biglietto dopo aver applicato lo sconto");

        //modifico il messaggio da inviare alla fine
        message = `
            <h2>Ciao passeggero </h2> 
            <p> Questo é il costo del tuo biglietto , ${costoBiglietto.toFixed(2)} euro. </p>
            <p> Al biglietto é stato applicato uno sconto del 20% , ovvero é stato detratto questo valore ${scontoOver.toFixed(2)} essendo lei un minorenne, dato che ha ${etaPass} anni. </p> `;
    }else if(etaPass < 0){
        //non applico nessuno sconto e invio un messaggio di errore
        message = `
            <h2> Ciao passeggero </h2>
            <p> La sua etá non risulta conforme , probabilmente ha sbagliato a digitare, la preghiamo di ricaricare la pagina e di inserire nuovamente i dati, grazie.</p>
        `
        costoBiglietto = 0;
    }else{
        message = `
        <h2> Ciao passeggero </h2>
        <p>Il prezzo del suo biglietto é di ${costoBiglietto} euro , a cui non é stato applicato nessuno sconto avendo lei ${etaPass} anni. </p>
        <p>Gli sconti possibili sono del 20% per i minorenni e del 40% per gli over 65.</p>
        `
    }
}else{
    message = `
    <h2> Ciao passeggero </h2>
    <p>Il numero di km da lei inserito non risulta conforme, probabilmente ha sbagliato a digitare, la preghiamo di ricaricare la pagina e di inserire nuovamente i dati, grazie. </p>
    `
}

//restituisco il messaggio
document.getElementById("messaggio").innerHTML = message;
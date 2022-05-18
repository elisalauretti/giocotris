//bottone scelta posizione
const pos1 = document.querySelector("#posizione1");
//bottone scelta simbolo
const croce = document.querySelector("#scelta-croce");

//simboli nella casella 1 da usare per mettere o togliere ignoto
const casella1croce = document.querySelector(".croce.1");
const casella1cerchio = document.querySelector(".cerchio.1");
//azione di bottoni
pos1.addEventListener("click", sceltaposizione1);
croce.addEventListener("click", sceltasimbolocroce);

var sceltaposizione;
var sceltasimbolo;
var mossagiocatore1=[sceltaposizione,sceltasimbolo];  //ti serve per i punti
function sceltaposizione1() {
    return sceltaposizione=1;
}
function sceltasimbolocroce() {
    casella1croce.classList.remove("ignoto");
    return sceltasimbolo="croce";
}

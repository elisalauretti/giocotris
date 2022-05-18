//bottone scelta posizione
const pos1 = document.querySelector("#posizione1");
const pos2 = document.querySelector("#posizione2");
const pos3 = document.querySelector("#posizione3");
const pos4 = document.querySelector("#posizione4");
const pos5 = document.querySelector("#posizione5");
const pos6 = document.querySelector("#posizione6");
const pos7 = document.querySelector("#posizione7");
const pos8 = document.querySelector("#posizione8");
const pos9 = document.querySelector("#posizione9");
//bottone scelta simbolo
const croce = document.querySelector("#scelta-croce");
const cerchio = document.querySelector("#scelta-cerchio");
//bottone conferma
const conferma = document.querySelector("#conferma");

//simboli nella casella 1 da usare per mettere o togliere ignoto
const casella1croce = document.querySelector("#croce1");
const casella1cerchio = document.querySelector("#cerchio1");
//azione di bottoni posizione
pos1.addEventListener("click",sceltaposizione1);
//azione di bottoni simboli
croce.addEventListener("click",sceltasimbolocroce);
//azione del bottone di conferma
conferma.addEventListener("click",determinazionemossa);
var sceltaposizione;
var sceltasimbolo;
var mossagiocatore1=[sceltaposizione,sceltasimbolo];  //ti serve per i punti
function sceltaposizione1() {  // non corrisponde a nessuna azione in pagina non so se va bene
    return sceltaposizione=1;
}
function sceltasimbolocroce() {
    return sceltasimbolo="croce";
}
function determinazionemossa() {
    if (sceltasimbolo="croce"){
        if (sceltaposizione === 1) {
            casella1croce.classList.remove("ignoto");
        } else if (sceltaposizione === 2) {
                casella2croce.classList.remove("ignoto");
        } else if (sceltaposizione === 3) {
            casella3croce.classList.remove("ignoto");
        } else if (sceltaposizione === 4) {
            casella4croce.classList.remove("ignoto");
        } else if (sceltaposizione === 5) {
            casella5croce.classList.remove("ignoto");
        } else if (sceltaposizione === 6) {
            casella6croce.classList.remove("ignoto");
        } else if (sceltaposizione === 7) {
            casella7croce.classList.remove("ignoto");
        } else if (sceltaposizione === 8) {
            casella8croce.classList.remove("ignoto");
        } else (sceltaposizione === 9) {
            casella9croce.classList.remove("ignoto");
        }
    } else (sceltasimbolo = "cerchio") {
        if (sceltaposizione === 1) {
            casella1croce.classList.remove("ignoto");
        } else if (sceltaposizione === 2) {
            casella2croce.classList.remove("ignoto");
        } else if (sceltaposizione === 3) {
            casella3croce.classList.remove("ignoto");
        } else if (sceltaposizione === 4) {
            casella4croce.classList.remove("ignoto");
        } else if (sceltaposizione === 5) {
            casella5croce.classList.remove("ignoto");
        } else if (sceltaposizione === 6) {
            casella6croce.classList.remove("ignoto");
        } else if (sceltaposizione === 7) {
            casella7croce.classList.remove("ignoto");
        } else if (sceltaposizione === 8) {
            casella8croce.classList.remove("ignoto");
        } else (sceltaposizione === 9) {
            casella9croce.classList.remove("ignoto");
        }
    }
}
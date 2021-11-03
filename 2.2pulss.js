let vanus = prompt("Sisestage oma vanus: ");
let sugu = prompt("Sisestage oma sugu (M/m või N/n): ");
let trenn = prompt("Sisestage treenintyyp (1, 2 v]i 3): ");

//tingimuslause
let maxPulsisagedus;
if(sugu == "M" || sugu == "m"){
    maxPulsisagedus = 220 - vanus;
}
if(sugu == "N" || sugu == "n"){
    maxPulsisagedus = 206 - vanus * 0.88;
}

//treening
let maxPulss;
let minPulss;
if(trenn == 1) {
    minPulss= maxPulsisagedus * 0.5;
    maxPulss = maxPulsisagedus * 0.7;
} else if(trenn == 2) {
    minPulss= maxPulsisagedus * 0.7;
    maxPulss = maxPulsisagedus * 0.8;
} else if(trenn == 3) {
    minPulss= maxPulsisagedus * 0.8;
    maxPulss = maxPulsisagedus * 0.87;
}
console.log("Pulsisagedus peaks olema vahemikus " + minPulss + " ja " + maxPulss);

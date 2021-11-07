// kasutajasisend
let suurus = prompt("Sisestage kirja suurus (MB):");
let teema = prompt("Sisestage kirja teema: ");
let fail = prompt("Kas kirjaga on kaasas fail? Kirjutage JAH või EI.");

if (teema !== "") { //pealkiri on
    if (suurus > 1 ) {
        if (fail === "JAH") {
            console.log("Spam");
            alert("See on spämm."); //kiri on koos failiga rohkem kui 1mb
        } else {
            console.log("Pole spam");
            alert("See ei ole spämm."); //kiri on koos failiga vähem kui 1mb
        }
    } else {
        console.log("Pole spam")
        alert("See ei ole spämm."); // kogu kiri on väiksem kui 1mb
    }
} else { // pealkirja pole
    console.log("Spam")
    alert("See on spämm.")
}
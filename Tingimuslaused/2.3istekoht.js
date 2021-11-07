//kasutajasisend
let valik = prompt("Kas soovite istekohta ise (kirjutage ISE ) või loosiga (kirjutage LOOS)? ");

if(valik === "ISE") {
    //valib ise
    console.log("Valitakse ise koht")
    let koht = prompt("Kas soovid istuda aknaääres (kirjutage AKEN) või muus kohas (kirjutage MUU)?");
    if (koht === "AKEN") {
        console.log("Aknakoht");
        alert("Valisite endale aknakoha. Head reisi!");
    } else {
        console.log("Muu koht");
        alert("Valisite endale muu koha. Head reisi!");
    }
}
else {
    //valib loosiga
    let toenaosus = math.trunc(math.ceil(math.random() * 3));
    console.log("Istekoht loositi.");
    if(toenaosus === 1) {
        console.log("Aknakoht");
        alert("Saite loosiga aknakoha. Head reisi!");
    } else {
        console.log("Muu koht");
        alert("Saite loosiga muu koha. Head reisi!");
    }
}

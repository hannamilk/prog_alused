let temperatuur = prompt("Sisestage õhutemperatuur: ");
// tingimuslause
if(temperatuur > 4.0) {
    console.log("Jäätumisohtu ei ole")
    alert("Väljas ei ole jäätumisohtu")
}

if(temperatuur <= 4.0) {
    console.log("On jäätumisoht")
    alert("Väljas on jäätumisoht")
}

//või kirjutada lihtsalt else { console.log(on jäätumisoht)}

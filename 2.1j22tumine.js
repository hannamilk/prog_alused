let temperatuur = prompt("Sisestage õhutemperatuur: ");
// tingimuslause
if(temperatuur > 4.0) {
    console.log("J22tumisohtu ei ole")
    alert("Väljas ei ole jäätumisohtu")
}

if(temperatuur <= 4.0) {
    console.log("On j22tumisoht")
    alert("Väljas on jäätumisoht")
}

//v6i kirjutada lihtsalt else { console.log(on jaatumisoht)} //

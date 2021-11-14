// 3.3 t2ringumang

let taringud = prompt("Mitu täringut on mängus?");

for (let i = 1; i <= taringud; i++) {
    let silmade_arv = Math.floor(Math.random() * 6) + 1
    console.log(silmade_arv)
}
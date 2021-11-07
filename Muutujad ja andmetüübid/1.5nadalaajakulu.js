// kasutajasisend
let ainepunktid = prompt("Sisestage ainepunktide (EKAP) arv: ");
let nadalad = prompt("Sisestage ainepunktide läbimiseks ettenähtud nädalate arv: ");

//tehe ajakulu (täisarvudes) arvutamiseks

let ajakulu = Math.trunc(ainepunktid * 26 / nadalad);

console.log("Teie ajakulu on " + ajakulu + " tundi nädalas." )
alert("Teie ajakulu on " + ajakulu + " tundi nädalas." )

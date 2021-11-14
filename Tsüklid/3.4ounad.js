// 3.4 õunte jagamise ülesanne
let poialpoisid = prompt("Mitme pöialpoisi vahel õunu jagatakse? (0-7)");
let ounad_kokku = 14;

for (let i = 1; i <= poialpoisid; i++) {
    let ounad = Math.floor(Math.random() * 2) + 1
    ounad_kokku = ounad_kokku - ounad
    console.log(i + ". pöialpoiss sai " + ounad + " õuna.")
}

console.log("Lumivalgekesele jäi alles " + ounad_kokku + " õuna.")
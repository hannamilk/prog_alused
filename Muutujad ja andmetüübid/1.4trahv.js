var nimi = window.prompt("Sisestage nimi: ");
var num1 = window.prompt("Sisestage lubatud s6idukiirus: ");
var num2 = window.prompt("Sisestage tegelik s6idukiirus: ");

let tulemus = (num2-num1)*3
let vastus = Math.min(190, tulemus);

alert(nimi + ", teie trahv on " + vastus + " eurot");
console.log(vastus);

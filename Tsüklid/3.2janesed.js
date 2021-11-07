// kasutajasisend
let ringid = prompt("Joostud ringide arv: ");
let porgandid = 0;

// while tsykkel
let ring = 1;
while(ring <= ringid) {
    if(ring % 2 == 0) {
        porgandid = porgandid + ring;
    }
    ring++;
}
console.log("Saadud porgandite arv on " + porgandid);
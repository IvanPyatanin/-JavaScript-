
let getHole = index => document.getElementById(`hole${index}`);
let deadTicket = document.getElementById('dead');
let lostTicket = document.getElementById('lost');
let deadContent = parseInt(deadTicket.textContent);
let lostContent = parseInt(lostTicket.textContent);

function checkGame(deadTicket, lostTicket) {
    console.log(deadTicket, lostTicket);
    if (deadTicket === 5) {
        alert("Вы победили!");
        location.reload();
    } else if (lostTicket === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            deadContent += 1;
            deadTicket.textContent = deadContent;
        } else {
            lostContent += 1;
            lostTicket.textContent = lostContent;
        };
        checkGame(deadContent, lostContent);
    };
};

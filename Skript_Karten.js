//Importe
import ToggleElement from "./ToggleElement.js";
import cardValues from "./CardValues.js";

//Variablen deklarieren
var kartendeck = ["Pik 2", "Pik 3", "Pik 4", "Pik 5", "Pik 6", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik J", "Pik D", "Pik K", "Pik A",
    "Kreuz 2", "Kreuz 3", "Kreuz 4", "Kreuz 5", "Kreuz 6", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz J", "Kreuz D", "Kreuz K", "Kreuz A",
    "Herz 2", "Herz 3", "Herz 4", "Herz 5", "Herz 6", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz J", "Herz D", "Herz K", "Herz A",
    "Caro 2", "Caro 3", "Caro 4", "Caro 5", "Caro 6", "Caro 7", "Caro 8", "Caro 9", "Caro 10", "Caro J", "Caro D", "Caro K", "Caro A"];
var ablagestapel = [];
var summe_spieler = 0;
var summe_computer = 0;
var restkarten = 0;
var karten_npc = 0;


//Funktionen
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function karte_aufdecken() {
    var kartennr = getRandomInt(kartendeck.length);
    console.log("Spieler:" + kartennr + " Das ist eine " + kartendeck[kartennr]);
    if (restkarten < kartendeck.length) {
        if (kartendeck[kartennr] == "-") {
            karte_aufdecken();
        } else {
            document.getElementById("meineZahl").innerHTML = "Es wurde ein/e " + kartendeck[kartennr] + " aufgedeckt.";
            summe_spieler += cardValues[kartendeck[kartennr]];
            ablagestapel.push(kartendeck[kartennr]);
            kartendeck[kartennr] = "-";
            restkarten++;
        }
    } else {
        document.getElementById("aufdecken").disabled = true;
        ToggleElement('warnung');
    }

    if (summe_spieler <= 21) {
        document.getElementById("summe_spieler").innerHTML = "Deine aktuelle Summe: " + summe_spieler;
    } else {
        document.getElementById("summe_spieler").innerHTML = "bust";
        document.getElementById("aufdecken").disabled = true;
        document.getElementById("aufhören").disabled = true;
        document.getElementById("gewinnanzeige").style.display = "block";
        document.getElementById("gewinnanzeige").innerHTML = "Du hast verloren!";
        document.getElementById("nochmal").style.display = "block";

    }
}

export function computer_karten() {
    var kartennr = getRandomInt(kartendeck.length);
    console.log("Computer:" + kartennr + " Das ist eine " + kartendeck[kartennr]);
    document.getElementById("aufdecken").disabled = true;
    if ((karten_npc < 2 && restkarten < kartendeck.length) || (summe_computer < 17 && restkarten < kartendeck.length)) {
        if (kartendeck[kartennr] == "-") {
            computer_karten();
        } else {
            document.getElementById("meineZahl").innerHTML = "Es wurde ein/e " + kartendeck[kartennr] + " aufgedeckt.";
            karten_npc++;
            summe_computer += cardValues[kartendeck[kartennr]];
            ablagestapel.push(kartendeck[kartennr]);
            kartendeck[kartennr] = "-";
            restkarten++;
            computer_karten();
        }
    } else {
        document.getElementById("computersumme").innerHTML = "Dein Gegner hat " + summe_computer + " Punkte erzielt.";
        if (summe_spieler > summe_computer || summe_computer > 21) {
            document.getElementById("gewinnanzeige").innerHTML = "Du hast gewonnen!";
        } else {
            document.getElementById("gewinnanzeige").innerHTML = "Du hast verloren!";
        }

    }

}

export function nochmal() {
    kartendeck = ["Pik 2", "Pik 3", "Pik 4", "Pik 5", "Pik 6", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik J", "Pik D", "Pik K", "Pik A",
        "Kreuz 2", "Kreuz 3", "Kreuz 4", "Kreuz 5", "Kreuz 6", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz J", "Kreuz D", "Kreuz K", "Kreuz A",
        "Herz 2", "Herz 3", "Herz 4", "Herz 5", "Herz 6", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz J", "Herz D", "Herz K", "Herz A",
        "Caro 2", "Caro 3", "Caro 4", "Caro 5", "Caro 6", "Caro 7", "Caro 8", "Caro 9", "Caro 10", "Caro J", "Caro D", "Caro K", "Caro A"];
    ablagestapel = [];
    summe_spieler = 0;
    summe_computer = 0;
    restkarten = 0;
    karten_npc = 0;
    document.getElementById("meineZahl").innerHTML = "aufgedeckte Zahl";
    document.getElementById("summe_spieler").innerHTML = "aktuelle Summe";
    document.getElementById("aufdecken").disabled = false;
    document.getElementById("aufhören").disabled = false;
}

import { karte_aufdecken } from "./Skript_Karten.js";
import { computer_karten } from "./Skript_Karten.js";
import { nochmal } from "./Skript_Karten.js";
import ToggleElement from "./ToggleElement.js";


document.getElementById("btnOhne").onclick = () => {
    ToggleElement('btnOhne');
    ToggleElement('btnMit');
    ToggleElement('countdown');
    ToggleElement('wochentage');
};

document.getElementById("btnMit").onclick = () => {
    ToggleElement('btnOhne');
    ToggleElement('btnMit');
    ToggleElement('countdown');
    ToggleElement('wochentage');
};

document.getElementById("aufdecken").onclick = () => {
    karte_aufdecken();
};

document.getElementById("aufhören").onclick = () => {
    ToggleElement('computersumme');
    ToggleElement('gewinnanzeige');
    computer_karten();
    ToggleElement('nochmal');
}

document.getElementById("nochmal").onclick = () => {
    nochmal();
    ToggleElement('gewinnanzeige');
    ToggleElement('nochmal');
    if (getComputedStyle(document.getElementById('computersumme')).display === "block") {
        ToggleElement('computersumme');
    }
}

document.getElementById("btnBlackJack").onclick = () => {
    ToggleElement('spielfeld');
}
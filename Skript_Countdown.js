// Set the date we're counting down to
var ende = new Date("Jul 1, 2025 12:30:00").getTime();

// Get today's date and time
var now = new Date().getTime();


//Anzahl der Wochentage berechnen
function getWorkingDays() {
    var Datum = new Date();
    let weekday = 0;
    let distance = ende - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let count = 0;
    var heute = Datum.getDay();

    while (count <= days) {
        if (heute !== 0 && heute !== 6) {
            weekday++;
        }
        if (heute == 6) {
            heute = 0;
        } else {
            heute++;
        }

        count++;
    }

    return weekday;
}

//Countdown Ende Theoriephase
// Update the count down every 1 second 
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distanceEndeStudium between now and the count down date
    var distanceEndePhase = ende - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distanceEndePhase
        / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceEndePhase
        % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceEndePhase
        % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceEndePhase
        % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // Display the result in the element with id="wochentage"
    document.getElementById("wochentage").innerHTML = getWorkingDays() + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distanceEndePhase
        < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

//Toggle Element
function ToggleElement(elementName) {
    const toggleElement = document.getElementById(elementName);
    if (toggleElement.style.display == "none") {
        toggleElement.style.display = "block";
    }
    else {
        toggleElement.style.display = "none";
    }

}

//Fortschrittsbalken
var start = new Date("Apr 14, 2025 00:00:00").getTime();
var geschafft = now - start;
var dauer = ende - start;
var prozentZeit = (90 * geschafft) / dauer;
var gerundet = Math.round(prozentZeit);

window.onload = () => {
    document.getElementById("fortschritt").setAttribute("width", prozentZeit + "vw");
    document.getElementById("prozentanzeige").innerHTML = "Wir haben schon ~" + gerundet + "% geschafft.";
    document.getElementById("vorlesungscounter").innerHTML = "In diesen Tagen haben wir noch: " + vorlesungen + " Vorlesungen.";
};

//Liste  mit Vorlesungsterminen
const terminliste = [
    "2025-04-24T17:30",
    "2025-04-25T10:30",
    "2025-04-25T15:00",
    "2025-04-28T12:30",
    "2025-04-28T15:00",
    "2025-04-29T16:00",
    "2025-04-30T12:00",
    "2025-04-30T16:00",
    "2025-05-05T12:30",
    "2025-05-05T16:00",
    "2025-05-06T15:00",
    "2025-05-07T12:00",
    "2025-05-08T14:00",
    "2025-05-09T15:00",
    "2025-05-12T12:30",
    "2025-05-12T16:00",
    "2025-05-13T12:30",
    "2025-05-14T12:00",
    "2025-05-14T16:00",
    "2025-05-15T14:00",
    "2025-05-16T15:00",
    "2025-05-19T12:30",
    "2025-05-19T16:00",
    "2025-05-20T12:30",
    "2025-05-20T15:00",
    "2025-05-22T14:00",
    "2025-05-26T12:15",
    "2025-05-26T16:00",
    "2025-05-27T12:30",
    "2025-05-27T15:00",
    "2025-06-02T12:15",
    "2025-06-02T16:00",
    "2025-06-03T12:30",
    "2025-06-03T16:30",
    "2025-06-04T12:00",
    "2025-06-04T16:45",
    "2025-06-05T14:00",
    "2025-06-06T12:15",
    "2025-06-06T16:00",
    "2025-06-10T12:30",
    "2025-06-11T12:00",
    "2025-06-12T14:00",
    "2025-06-13T13:30",
    "2025-06-16T12:00",
    "2025-06-17T12:30",
    "2025-06-18T12:00",
    "2025-06-23T12:00",
    "2025-06-24T12:30",
    "2025-06-24T16:30",
    "2025-06-25T12:00",
    "2025-06-26T14:00",
    "2025-06-27T11:00",
    "2025-07-01T12:30",
];

var vorlesungen = terminliste.filter(dateStr => {
    const date = new Date(dateStr);
    return date > now;
}).length;
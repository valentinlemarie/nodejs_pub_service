var liste = require('../mocks/pub.json')

function listeDePub() {
    return liste;
}

function listeDePubOuvert() {
    var date = new Date();
    var chiffreDate = date.getDay();
    var semaine = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    var stringDate = semaine[chiffreDate - 1];
    console.log(stringDate);
    var ouvert = [];
    for (var i = 0; i < liste.length; i++){
        for(var j=0 ; j < liste[i].openDays.length ; j++){
            var jour =liste[i].openDays[j];
            if (jour.localeCompare(stringDate) == 0 ) {
                ouvert.push(liste[i]);
            }
        }
    }
    return ouvert;
}


module.exports = {
    listeDePub: listeDePub,
    listeDePubOuvert: listeDePubOuvert
}

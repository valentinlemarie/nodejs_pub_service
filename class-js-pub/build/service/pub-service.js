'use strict';

var classPub = require('../class/pub');

var liste = require('../../../pub-service/mocks/pub.json');

function listePub() {
    var pubs = [];
    console.log(liste);
    liste.forEach(function (pub) {
        pubs.push(new classPub.Pub(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.openHours, pub.beers));
    });
    return pubs;
}

module.exports = {
    listePub: listePub
};
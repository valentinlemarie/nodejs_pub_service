var pubService = require('./services/pub-services');
module.exports = {
    services:{
        pubService:pubService
    }
}


console.log("liste de tout les pubs")
console.log(pubService.listeDePub());

console.log("liste de tout les pubs ouvert aujourd'hui")
console.log(pubService.listeDePubOuvert());
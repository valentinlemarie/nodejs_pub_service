var servicepub = require("../../pub-service/services/pub-services")

function afficher(){
    console.log(servicepub.listeDePub() );
}

module.exports = {
        getListPub:afficher
}
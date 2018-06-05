



class Pub {
    constructor(name,firstName , lastName ,mail,openDay,start , end ,openHours,beer){
        this.name = name;
        this.owner(firstName,lastName,mail);
        this.openDay = openDay;
        this.openHours(start,end);
        this.beer = beer ;
    }

    owner(firstName,lastName,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail ;
    }

    openHours(start, end){
        this.start = start;
        this.end = end;
    }

}


module.exports = {
    Pub: Pub
}



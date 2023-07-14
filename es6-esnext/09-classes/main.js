class Chieng {
    constructor(nom, race, age){
        this.nom = nom;
        this.race = race;
        this.age = age;
    }

    aboyer(){
        console.log(`Le chieng ${this.nom} est en train d'aboyer`);
    }
    caliner(){
        console.log("votre chieng vous aodre")
        this.aboyer()
    }
    get surnom(){
        return this.nick;
    }
    set surnom(value){
        this.nick = value;
    }
}

const rex = new Chieng("Rex", "bichong",10)
console.log(rex);
rex.aboyer()

rex.surnom = "toto"
console.log(rex.surnom)

console.log(rex);


class Animal{
    constructor(nom){
        this.nom = nom;
        this.stamina = 100
        this.stomach = [];
    }
    info(){
        console.log(`ceci est ${this.nom}`);
    }
    sleep(){
        this.stamina += 30;
        return this.stamina
    }
    manger(food){
        this.stomach.push(food);
        return this.stomach;
    }
    run(){
        this.stamina -= 50;
        return this.stamina;
    }
    poop(){
        this.stomach = []
        return this.stomach;
    }
}

class Chevre extends Animal{
    constructor(type, race){
        super(type)
        this.stamina += 1000;
        this.race = race;
    }
    bele(){
        console.log(`${this.nom} est en train de bêler`);
        this.stamina += 500;
        console.log(this.stamina);
    }
    fight(){
        console.log(`${this.nom} est en train de tuer des gens`);
        this.stamina -= 20;
        console.log(this.stamina);
    }
}



const biquette =  new Chevre("chèvre", "des montagnes")

console.log(biquette.manger("Vincent"));

console.log(biquette.poop());

class Ingredients{
    constructor(nom, etats, prix);
}

// 1e Tableau
class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom =nom,
        this.lieu = lieu,
        this.argent = argent,
        this.mainDroite = mainDroite,
        this.mainGauche = mainGauche,
        this.seDeplacer=(lieu)=>{
            Lieu.personnes.push(this.nom);
            this.lieu.splice(this.lieu.indexOf(this,1));
        }
    }
}

let lira = new Personne("Lira", 40);

// 2e Tableau
class Couteau{
    constructor(nom, action){
        this.nom = nom;
        this.action = "coupé";
    }
}


// 3e Tableau
class Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes
    }
}
let maison = new Lieu("Maison",[]);
let epicerie = new Lieu("Epicerie",[]);
let magasin = new Lieu("Magasin", ["oignon", "oeuf", "epice", "fromage"]);

class Ingredients{
    constructor(){

    }
}

let poele = [cuir =()=>{
    
}]
// class Poele{
//     constructor(contenu){
//         this.contenu = [];
//         this.cuir =()=>{

//         }
    
//     }
// }

class Bol{
    constructor(contenu){
        this.contenu = [];
        this.nomMelange =()=>{
        }
        this.cuir =()=>{
        }
    }
}

console.log(Personage.nom + "est actuellement à la "  );
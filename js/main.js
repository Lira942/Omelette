class Ingredients{
    constructor(nom, etats, prix){
        this.nom = nom,
        this.etats = etats,
        this.prix = prix
        
    }
}

// 1e Tableau
class Personnage{
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

let lira = new Personnage("Lira","Maison", 40);

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


let poele = [cuir =()=>{

}]
 class Poele{
     constructor(contenu){
         this.contenu = [];
         thiscuir =()=>{
            Ingredients.etats = "couper";
        }
    
     }
 }

class Bol{
    constructor(contenu){
        this.contenu = [];
        this.nomMelange =()=>{
        }
        
    }
}

console.log(Personnage.nom + `est actuellement à la ${maison}`);
lira.seDeplacer(magasin);
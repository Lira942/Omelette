class Personage {
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom ="Lira";
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer=(depart,arrivee)=>{
            
        };
        
    }
    
}




class Maison{
    constructor(nom, maison,){
        this.nom = nom;
        this.maison = maison;
        personnes = []; 
        this.couteau=(nom, action)=>{

        }
    }
}

class Produits{
    constructor(ingredients,nom,etats,prix){
        this.ingredients = ingredients;
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}
class Epicerie{
    constructor(nom, personnes, panier){
        this.nom = nom;
        this.personnes = [];
        this.panier = panier;
    }
}

class Poele{
    constructor(contenu){
        this.contenu = [];
        this.cuir =()=>{
    }
    
    }
}

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
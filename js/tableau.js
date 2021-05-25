class Ingredients{
    constructor(nom, etats, prix){
        this.nom = nom,
        this.etats = etats,
        this.prix = prix
        
    }
}

class Personne{
    constructor(nom, lieu, argent){
        this.nom =nom,
        this.lieu = lieu,
        this.argent = argent,
        this.mainDroite =()=>{

        }
        this.mainGauche =()=>{
            
        }

        this.seDeplacer=(lieu)=>{
            Lieu.personnes.push(this.nom);
            this.lieu.splice(this.lieu.indexOf(0));
        }
    }
}

class Couteau{
    constructor(nom, action){
        this.nom = nom,
        this.action = action;
        this.couper =()=>{
           console.log(`${Ingredients.nom} est coupé`)
        }
    }
}

class Lieu{
    constructor(nom,personnes,paniers){
        this.nom = nom,
        this.personnes = personnes,
        this.panier = paniers;
    }
}

class Poele{
    constructor(contenu){
        this.contenu = contenu;
        this.cuir =()=>{
           
       }
    }
}

class Bol{
    constructor(contenu){
        this.contenu = contenu;
        this.nomMelange =()=>{

        }
        
    }
}
export {Ingredients, Personne, Couteau, Lieu, Poele, Bol};

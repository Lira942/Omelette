import {Ingredients, Personne, Couteau, Lieu, Poele,Bol} from'./tableau.js';

// LIEUX
let maison = new Lieu("Maison",[]);
let epicerie = new Lieu("Epicerie",["oignon", "oeuf", "epice", "fromage"]);
let magasin = new Lieu("Magasin", []);

    // PERSONNAGE
let lira = new Personne("Lira","Maison", 40);

    // COUTEAU
let couteau = new Couteau("couteau", "couper")

    // INGREDIENTS
let oignon = new Ingredients("oignon", Couteau.action, 4, "Panier de legumes");
let oeuf = new Ingredients("oeuf", Couteau.action, 8, "Panier d'oeufs" );
let epice = new Ingredients("epice", Couteau.action, 5, "Panier d'épice");

    // POELE
 let poele = new Poele ([],)

    // BOL
let bol = new Bol([])


// console.log(Personne.nom + `est actuellement à la ${maison}`);
// lira.seDeplacer(magasin);
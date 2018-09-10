var lg = console.log;

lg("03 - POO")

/* Fonction constructeur */

function Personne(prenom, nom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function() {
        return("Nom : " +  this.nom + "Prénom : " + this.prenom + "Pseudo : " + this.pseudo);
    }
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

lg(jules.nom);
lg(jules.prenom);
lg(jules.pseudo);
lg(jules.getNomComplet());

lg(paul.nom);
lg(paul.prenom);
lg(paul.pseudo);
lg(paul.getNomComplet());

function afficherPersonne(Personne) {
    lg(Personne.nom);
    lg(Personne.prenom);
    lg(Personne.pseudo);
}
afficherPersonne(paul);

/* Modifier une objet  */

jules.pseudo = "jules44";
afficherPersonne(jules);

/* Ajouter une propriété à Personne  */

lg(jules.age); //undefined
Personne.prototype.age = "NON RENSEIGNE";
lg(jules.age);
jules.age = 30;
lg(jules.age);

/* Ajouter une méthode à Personne  */

Personne.prototype.getInitiales = function(){
    return(this.prenom.charAt(0) + this.nom.charAt(0));
}
lg(jules.getInitiales());

/* Objet sans fonction constructeur  */

var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet : function() {
        return("Nom : " +  this.nom + "Prénom : " + this.prenom + "Pseudo : " + this.pseudo);
    }
}

afficherPersonne(robert);

/* Héritage via une fonction constructeur */ 

function Client(prenom, nom, pseudo, numeroClient){
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = function(){
        return ("Numéro client : " + this.numeroClient + " Nom : " +  this.nom + " Prénom : " + this.prenom);
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");
afficherPersonne(steve);
lg(steve.numeroClient);

lg("****************************");

function afficheClient(Client){
    afficherPersonne(Client);
    lg(Client.numeroClient);
}

lg(steve.getInfos());
afficheClient(steve);
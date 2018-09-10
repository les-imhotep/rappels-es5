var lg = console.log;
//fonction constructeur
function Personne(nom,prenom,pseudo){
    this.nom=nom
    this.prenom=prenom
    this.pseudo=pseudo
    this.getNomComplet = function(){
        return "Nom :"+this.nom+" Prenom :"+this.prenom+" Pseudo :"+this.pseudo
    }
}

//creation de 2 objets : Jules et Paul
var jules = new Personne("LEMAIRE","Jules","jules77")
var paul = new Personne("LEMAIRE","Paul","paul44")

//fonction permettant d'afficher les objet de la fonction personne
function afficherPersonne(Personne){
    lg(Personne.nom)
    lg(Personne.prenom)
    lg(Personne.pseudo)
    lg(Personne.getNomComplet())
}

//test de la fonction 
afficherPersonne(paul)

//modification pseudo + afichage nom complet 
jules.pseudo ='jules44'
lg(jules.getNomComplet())

/*
Ajouter une propriété à Personne
    Afficher la propriété age de l'objet jules.

Vérifier que la valeur est undefined..

 Modifier l'age de l'objet jules à 30.

Afficher la propriété age de l'objet jules dans la console.

*/
Personne.prototype.age 
lg(jules.age)
jules.age = 30
lg(jules.age)

//Ajouter une méthode à Personne

Personne.prototype.getInitiales = function(){
    var initNom = ""+this.nom
    var initPrenom = ""+this.prenom
    return initNom.charAt(0) + initPrenom.charAt(0)
}
lg(jules.getInitiales())
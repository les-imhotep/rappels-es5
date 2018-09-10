//Fonction constructeur
function Personne(prenom,nom,pseudo){
    this.prenom = prenom;
    this.nom = nom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

var afficherPersonne = function(personne){
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}  

var personne1 = new Personne('Jules','LEMAIRE','jules77');
var personne2 = new Personne('Paul','LEMAIRE','paul44');
afficherPersonne(personne2);

//Modifier un objet
personne1.pseudo="jules44";
afficherPersonne(personne1);

//Ajouter une propriété à Personne
Personne.prototype.age;
personne1.age=30;
console.log(personne1.age);

//Ajouter une méthode à Personne
Personne.prototype.getInitiales = function() { 
    return this.prenom.charAt(0) + this.nom.charAt(0);
}
console.log(personne1.getInitiales());

//Objet sans fonction constructeur
var robert = {
    prenom: 'robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function(){
        return this.prenom+" "+this.nom+" "+this.pseudo;
    }
}
afficherPersonne(robert);

//Héritage via une fonction constructeur

function Client(numeroClient,prenom,nom,pseudo){
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient=numeroClient;
    this.getInfos = function(){
        return this.numeroClient+" "+this.nom+" "+this.prenom;
    }
}

var steve = new Client('A01','Steve','LUCAS','steve44');
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());
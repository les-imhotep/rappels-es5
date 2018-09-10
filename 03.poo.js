var cl = console.log

function Personne(prenom, nom, pseudo){
    this.prenom = prenom;
    this.nom = nom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom+ " "+ this.prenom+ " "+ this.pseudo;
    }
}

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

cl(jules.nom);
cl(jules.prenom);
cl(jules.pseudo);
cl(jules.getNomComplet());

cl(paul.nom);
cl(paul.prenom);
cl(paul.pseudo);
cl(paul.getNomComplet());

function afficherPersonne(Personne){
cl(Personne.nom);
cl(Personne.prenom);
cl(Personne.pseudo);
}

//Modifier un objet

jules.pseudo = 'jules44';


//Ajouter une propriété à Personne

Personne.prototype.age = "NON RENSEIGNE";
jules.age=30;
cl(jules.age)


//Ajouter une méthode à Personne

Personne.prototype.getInitiales = function(){
    return(this.prenom.charAt(0) + this.nom.charAt(0));
}

cl(jules.getInitiales());


//Objet sans fonction constructeur

var robert = {
    prenom: 'Robert', 
    nom: 'LEPREFET', 
    pseudo: 'robert27',
    getNomComplet: function() {
        return this.nom+ " "+ this.prenom+ " "+ this.pseudo;
    }
}

afficherPersonne(robert);


//Héritage via une fonction constructeur

function Client(prenom, nom, pseudo, numeroClient){
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return ("N° client : " + this.numeroClient + " Nom : " +  this.nom + " Prénom : " + this.prenom);
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");
afficherPersonne(steve);
cl(steve.numeroClient);


function afficherClient(Client){
    afficherPersonne(Client);
    cl(Client.numeroClient);
}

cl(steve.getInfos());
//afficherClient(steve); 

function Personne(nom, prenom, pseudo,){
this.nom = nom;
this.prenom = prenom;
this.pseudo= pseudo;

this.getNomComplet = function(){
    return "Nom = "+this.nom +" Prenom = "+ this.prenom+" Pseudo = "+this.pseudo;
}

this.getInitiales = function(){
  var  initNom = "" + this.nom;
  var  initPrenom = "" + this.prenom;
  
return "" + initNom.charAt(0) + initPrenom.charAt(0);
}
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");

var paul = new Personne("LEMAIRE", "Paul", "paul44");

function afficherPersonne( personne){
console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.pseudo);
console.log(personne.getNomComplet());
}
afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);

console.log(jules.age)
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age)

jules.age = 30;
console.log(jules.age)

console.log(jules.getInitiales());

var robert = {nom:"LEPREFET", prenom:"Robert", pseudo:"robert77", getNomComplet:function() {return "Nom = "+this.nom +" Prenom = "+ this.prenom+" Pseudo = "+this.pseudo}};

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient ) {
    this.numeroClient= numeroClient;
    Personne.call(this, prenom, nom, pseudo)
    

    this.getInfos = function(){
        return getNomComplet() + " numéro client = " + this.numeroClient;
    }
}

var steve = new Client("A01")

console.log(steve.getInfos());
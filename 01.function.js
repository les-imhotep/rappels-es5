//Définition d'une fonction
console.log("01 - Fonctions");
var lg = console.log;
var nombre1 = 10;
var nombre2 = 20;

function additionner(nombre1,nombre2){
    return nombre1 + nombre2;
}

var resultat1 = additionner(nombre1,nombre2);
lg("resultat1 = ",resultat1);

//Variable de type fonction
var somme = additionner;

var resultat2 = somme(nombre1,nombre2);
lg("resultat2 = ",resultat2);

//2-Multiplication
var multiplication = function(nombre1,nombre2){
    return nombre1*nombre2;
}

var resultat3 = multiplication(nombre1,nombre2);
lg("resultat3 = ",resultat3);

//Fonction comme élément du 1er ordre
var afficherOperation = function(nomOperation,operation = function() {},nb1,nb2){
    this.nomOperation = nomOperation;
    this.operation = operation;
    this.nb1 = nb1;
    this.nb2 = nb2;
    lg(nomOperation,"=","(",nombre1,"," ,nombre2,") =",resultat = operation(nb1,nb2)) 
}
    afficherOperation("Somme", somme,40,20);
    afficherOperation("Multiplication", multiplication,10,20);
    afficherOperation("Soustraction", function(nb1,nb2){return nb1-nb2},15,5);

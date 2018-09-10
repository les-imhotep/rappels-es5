console.log("01 - Fonctions");
var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1,nb2){
    return nb1+nb2;
}
var resultat1 = additionner(nombre1,nombre2);
console.log("resultat1 =", resultat1);

var somme = additionner;

var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 =", resultat2);

var multiplication = function(a,b){
    return a*b;
};

var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 =", resultat3);

var  afficherOperation = function(nomOperation, operation= function(){} , nb1,nb2){
this.nomOperation = nomOperation;
this.operation = operation;
this.nb1 = nb1;
this.nb2 = nb2;
console.log(nomOperation + "(" + nb1 + "," + nb2 + ") =" ,operation(nb1,nb2) )

};

afficherOperation("Somme",somme,20,40);

afficherOperation("Multiplication",multiplication,10,20)
afficherOperation("Soustraction", function(nbr1,nbr2){return nbr1-nbr2;}, 15,5);
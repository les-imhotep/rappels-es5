//PARTIE 1 : rappels JavaScript

var lg = console.log
var nombre1 = 10;
var nombre2 = 20;

//Addition. --> Resultat1
function Additionner(nb1, nb2){
    return nb1 + nb2;
}
var resultat1 = Additionner(nombre1, nombre2);
console.log('resultat1 = ' + resultat1);


//Addition. --> Resultat2
var somme = Additionner;
var resultat2 = somme(nombre1, nombre2);
console.log('resultat2 = ' + resultat2);


//Multiplication. --> Resultat3
var multiplication = function MultiplierPar2(nb1, nb2){
    return nb1 * nb2;
}
var resultat3 = multiplication(nombre1, nombre2);
console.log('resultat3 = ' + resultat3);

//AfficherOpération. --> On récupère le résultat de la somme.
var afficherOperation  = function(nomOperation ,operation, nb1, nb2) {
   lg(nomOperation + '(' + nb1 + ',' + nb2 + ') = ' + operation(nb1, nb2));
}
afficherOperation('Somme', somme, 20,40);

//AfficherOpération. --> On récupère le résultat de la multiplication.
afficherOperation('Multiplication', multiplication, 10,20);

//AfficherOpération. --> On récupère le résultat de la soustraction.
afficherOperation('Soustraction', function(nb1,nb2){return nb1 - nb2}, 15,5);


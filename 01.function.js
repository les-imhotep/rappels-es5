console.log("01 - Fonctions");

var lg = console.log;

/* Définition d'un fonction */ 

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);
lg("Résultat 1 =", resultat1);

/* Variable de type fonction */ 

var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
lg("Résultat 2 =", resultat2);

var multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}
var resultat3 = multiplication(nombre1, nombre2);
lg("Résultat 3 =", resultat3);

/* Fonction comme élement de 1er ordre */ 

function afficherOperation(nomOperation, operation, nb1, nb2) {
    lg(nomOperation + "(" + nb1 + "," + nb2 + ") = " + operation(nb1, nb2));
}

afficherOperation("Somme", somme, 20, 40);
afficherOperation("Multiplication", multiplication, 10, 20);
afficherOperation("Soustraction", function(nb1, nb2){return nb1 - nb2;}, 15, 5);



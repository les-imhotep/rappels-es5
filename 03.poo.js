//PARTIE 3 : la programmation orientée objet

var lg = console.log

//Fonction constructeur
function Personne(
    nom, 
    prenom, 
    pseudo, 
    getNomComplet(){return nom + prenom + pseudo;}){}

    var Jules = new Personne(Jules, LEMAIRE,jules77);
    var Paul = new Personne(Paul, LEMAIRE, paul44);

    lg(Jules.nom);
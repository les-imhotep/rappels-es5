//PARTIE 2 : les tableaux

var lg = console.log

var villes = ['nantes', 'paris','saint-nazaire','angers','le mans'];

//forEach()
function afficher(element, index, array){
lg(element);
}
villes.forEach(afficher);

//every() --> déterminer si toutes les villes contiennent la lettre a.
var lettreADansToutesLesVilles = function(element, index, array){
    return element.includes('a');
}
lg('lettreADansToutesLesVilles = ' + (villes.every(lettreADansToutesLesVilles)));

//some() --> déterminer si au moins une ville de la variables villes contient le caractère '-'.
var auMoinsUneVilleAvecUnTiret = function (element, index, array){
    return element.includes('-');
}
lg('auMoinsUneVilleAvecUnTiret = ' + (villes.some(auMoinsUneVilleAvecUnTiret)));

//filter() --> une variable villesSansTiretSansEspace qui contient un tableau dont les villes n'ont ni tiret, ni espace
var villesSansTiretSansEspace = function (element, index, array){
    return !(element.includes(" ")) && !(element.includes("-"));
}
lg('villesSansTiretSansEspace = [' + (villes.filter(villesSansTiretSansEspace)) +']');

//Chainer les fonctions
var villesMajusculeSeTerminantParS = villes
.filter(villes => (villes.endsWith("s")))
.map(villes => villes.toUpperCase());

villesMajusculeSeTerminantParS.forEach(function(element){
    lg( element);
});
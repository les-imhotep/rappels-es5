console.log("02 - Tableaux");

var lg = console.log; 

var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

/* forEach() */

villes.forEach(function(element){
    lg(element);
});

/* every() */

var lettreADansToutesLesVilles = function(element) {
    return element.includes("a");
}

lg("lettreADansToutesLesVilles =", villes.every(lettreADansToutesLesVilles));

/* some() */

var auMoinsUneVilleAvecUnTiret = function(element) {
    return element.includes("-");
}

lg("auMoinsUneVilleAvecUnTiret =", villes.some(auMoinsUneVilleAvecUnTiret));

/* filter() */

var villesSansTiretSansEspace = villes.filter(villes => !(villes.includes("-")) && !(villes.includes(" ")));

villesSansTiretSansEspace.forEach(function(element){
    lg(element);
});

/* Chainer les Fonctions */

lg(" -> Chainer les Fonctions");

var villesMajusculeSeTerminantParS = villes.filter(villes => (villes.endsWith("s"))).map(villes => villes.toUpperCase());

villesMajusculeSeTerminantParS.forEach(function(element){
    lg(element);
});

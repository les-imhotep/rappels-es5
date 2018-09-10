//Partie 2 - Les tableaux


//forEach()
var villes = ['nantes','paris','saint-nazaire','angers','le mans'];
villes.forEach(function(element){
    console.log(element)
});

//every()
var lettreADansToutesLesVilles = function(element){
    return element.includes("a");
}

console.log(villes.every(lettreADansToutesLesVilles));

//some()
var auMoinsUneVilleAvecUnTiret = function(element){
    return element.includes("-");
}
console.log(villes.some(auMoinsUneVilleAvecUnTiret));

//filter()
var villesSansTiretSansEspace = function(element){
    return !element.includes("-") && !element.includes(" ") ;
}
console.log(villes.filter(villesSansTiretSansEspace));

//Chainer les Fonctions
var villeFinissantParS = function(element){
    return element.slice(-1)=="s";
}
console.log(villes.filter(villeFinissantParS).map(element => element.toUpperCase()));
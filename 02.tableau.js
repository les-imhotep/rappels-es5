//forEach

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(function(element){
    console.log(element);
});


//every()

var lettreADansToutesLesVilles = function(element, index, array){
    return element.includes('a');
}
console.log('lettreADansToutesLesVilles','=', villes.every(lettreADansToutesLesVilles));


//somme()

var auMoinsUneVilleAvecUnTiret = function (element, index, array){
    return element.includes('-');
}
console.log('auMoinsUneVilleAvecUnTiret','=', villes.some(auMoinsUneVilleAvecUnTiret));


//filter

var villesSansTiretSansEspace = function (element, index, array){
    return !element.includes('-') && !element.includes(' ');
}
console.log('villesSansTiretSansEspace','=', villes.filter(villesSansTiretSansEspace));


//Chainer les Fonctions

var villesTerminantParS = function(element){
    return element.endsWith('s');
}

var villesMajuscule = function(element){
    return element.toUpperCase();
}
console.log('villesMajusculeSeTerminantParS','=', villes.filter(villesTerminantParS)
                    .map(element => element.toLocaleUpperCase()));


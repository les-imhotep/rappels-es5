var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

villes.forEach(element => {
    console.log(element)
});


villes.every(ville => 
   console.log("lettreADansToutesLesVilles =", ville.includes("a")));

var auMoinsUneVilleAvecUnTiret = villes.some(ville => 
    ville.includes("-"));
    console.log( "auMoinsUneVilleAvecUnTiret =" , auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(ville => 
!ville.includes("-") && !ville.includes(" "));
console.log("villesSansTiretSansEspace =", villesSansTiretSansEspace);


var villesMajusculeSeTerminantParS = villes.filter(ville=>ville.lastIndexOf("s")).map(ville => ville.toUpperCase());
console.log("villesMajusculeSeTerminantParS =", villesMajusculeSeTerminantParS);
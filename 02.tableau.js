var lg = console.log;
var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

//afficher tous les éléments du tableau
villes.forEach(element=>{
lg(element)
})

//déterminer si toutes les villes de la variables villes contiennent la lettre a
villes.every(ville=>{
    lg('lettreADansToutesLesVilles = ',ville.includes("a"))})
    
//déterminer si au moins une ville de la variables villes contient le caractère '-'.
villes.some(ville=>{
    if(ville.includes('-') === true)
    lg('auMoinsUneVilleAvecUnTiret = ',ville.includes('-'))
    
})

//villesSansTiretSansEspace qui contient un tableau dont les villes n'ont ni tiret, ni espace
var resultat = villes.filter(ville=>
    !ville.includes('-') && !ville.includes(' '))
 lg("villesSansTiretSansEspace =", resultat)

/*
un tableau dont :
la dernière lettre du nom est 's'
les noms des villes sont en majuscules 
*/
 var filtre = villes.filter(ville=>ville.lastIndexOf('s') )
var maj = filtre.map(ville=> ville.toUpperCase())
 lg("villesMajusculeSeTerminantParS =",maj)
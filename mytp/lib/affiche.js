/* global pagesDisponibles, projet */

projet = new Array();
projet["nom"]="BDPhilia";
projet["auteur"]="Richard";
projet["copy"]="&copy; 2009 Natixis";

function affichePageBandeauHaut(){
    var bandeau="<div id="+"bandeau"+">&nbsp;</div>";
    console.log("bandeau="+bandeau);
    return(bandeau);
};

function affichePageTitre(nomPage){
    titre = "<div id="+"titre"+"><h1>";
    for (i=0;i<pagesDisponibles.length;i++){
        if (pagesDisponibles[i][1]===nomPage){
            titre += pagesDisponibles[i][2];
        }
    }           
    titre += "</h1></div>";
    console.log("titre = " +titre);
    return(titre);
}

function affichePagePied(){
    pied ="<div id="+"pied"+"><span>";
    pied += projet["copy"] +" - Réalisé par ";
    pied += projet["auteur"];
    pied += "</span></div>";
    return(pied);
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global projet */

pagesDisponibles=[
    ["Accueil","index.htm","Bienvenue sur "+projet["nom"]],
    ["Recherche","recherche.htm","Votre recherche de BD"],
    ["Commande","commande.htm","Votre panier"]
];

function affichePageMenu(nom_page){
    menu='<div id="menu">';
    menu += "<ul>";
    for (i=0;i<pagesDisponibles.length;i++){
        menu += "<li ";
        if (nom_page == pagesDisponibles[i][1]){
            menu += 'class="select"';
        };
        menu += ">";
        
        menu += "<a href="+pagesDisponibles[i][1]+" title="+ pagesDisponibles[i][0]+">"+ pagesDisponibles[i][0]+"</a></li>";
        
      /*  switch (nom_page){
            case pagesDisponibles[i][1]:
                menu += "<a href="+nom_page+" title="+"Accueil"+">Accueil</a></li>";
                break;
            case pagesDisponibles[i][1]:    
                menu += "<a href="+"recherche.htm"+" title="+"Recherche"+">Recherche</a>";
                break;
            case pagesDisponibles[i][1]:    
                menu += "<a href="+"commande.htm"+" title="+"Commande"+">Commande</a>";
                break;
        };  */
       
        
    }
    menu += "</ul>";
    menu += "</div>";
    console.log("menu = "+menu);
    return(menu);
};
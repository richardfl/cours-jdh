/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ficheBd(titre, auteur, sortie, resume, prix, stock) {
    this.id;
    this.titre = titre;
    this.auteur = auteur;
    this.sortie = sortie;
    this.resume = resume;
    if (prix === undefined) {
        this.prix = 0;
    } else {
        this.prix = prix;
    }
    ;
    if (stock === undefined) {
        this.stock = 0;
    } else {
        this.stock = stock;
    }
    ;
    this.stocker = stocker;
    this.destocker = destocker;
    this.toString = toString;
    this.stocker_afficher = toString;
}

function stocker(qte) {
    this.stock += (qte === undefined) ? 1 : qte;
};

function destocker(qte) {
    if (qte === undefined) {
        this.stock -= 1;
    } else {
        this.stock -= qte;
    }
};

function toString() {
    texteBD = "Fiche BD n°" + this.id + ";";
    texteBD += "Auteur:" + this.auteur + ";";
    texteBD += "Prix:" + this.prix.toLocaleString() + ";";
    texteBD += "Stock:" + this.stock.toLocaleString() + ";";
    return(texteBD);
};

function stocker_afficher(){
    this.stocker();
    document.write('<span id="s1">'+"voila le stock de "+this.titre+" : "+this.stock.toString()+"</span></br>");
}

function stockBd(){
    this.stock;
    this.stockByKey;
}
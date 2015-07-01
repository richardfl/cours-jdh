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
}
;

function destocker(qte) {
    if (qte === undefined) {
        this.stock -= 1;
    } else {
        this.stock -= qte;
    }
}
;

function toString() {
    texteBD = "Fiche BD n°" + this.id + ";";
    texteBD += "Auteur:" + this.auteur + ";";
    texteBD += "Prix:" + this.prix.toLocaleString() + ";";
    texteBD += "Stock:" + this.stock.toLocaleString() + ";";
    return(texteBD);
}
;

function stocker_afficher() {
    this.stocker();
    document.write('<span id="s1">' + "voila le stock de " + this.titre + " : " + this.stock.toString() + "</span></br>");
}

function stockBd(bd) {
    this.stock = new Array();
    this.stockByKey = new Array();
    this.referencer = referencer;
    this.ajouter = ajouter;
    this.stocker = function (id, qte) {
        this.stock[id].stock += (qte === undefined) ? 1 : qte;
        console.log("stock["+id+"].stock = "+this.stock[id].stock)
    };

    this.destocker = function (id, qte) {
        if (qte === undefined) {
            this.stock[id].stock -= 1;
        } else {
            this.stock[id].stock -= qte;
        }
        console.log("stock["+id+"].stock = "+this.stock[id].stock)
    };
    this.toString = function () {
        tab = "<table>";
        for (i = 0; i < this.stock.length; i++) {
            tab+= (i%2 == 0) ? '<tr class="pair">' : '<tr class="impair">';
            tab += "<td>";
            tab += this.stock[i].titre;
            tab += "</td>";
            tab += "<td>";
            tab += this.stock[i].auteur;
            tab += "</td>";
            tab += "<td>";
            tab += this.stock[i].prix;
            tab += "</td>";
            tab += "<td>";
            tab += this.stock[i].stock;
            tab += "</td>";
            tab += "</tr>";
        }
        tab += "</table>";
        console.log("tab = "+tab);
        return(tab);
    }
}

function referencer(bd) {
    if (typeof bd === "Object") {
        this.stock.push(bd);
        this.stockByKey.push(this.stock.id);
    }
}

function ajouter(titre, auteur, sortie, resume, prix, stock) {
    var bd = new ficheBd(titre, auteur, sortie, resume, prix, stock);
    this.stock.push(bd);
    this.stockByKey[bd.id] = this.stock.length - 1;
}




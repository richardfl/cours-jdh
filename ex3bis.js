/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//toujours déclaré la foinction avant son utilisation
function prixTTC(prixHT, taux) {
    // variable locale
    var rst = prixHT * (100 + taux) / 100;
    return (rst);
}

function prixTTCg(prixHT, taux) {
    // variable globale
    pttc = prixHT * (100 + taux) / 100;
    return (pttc);
}


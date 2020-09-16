var a = "AaEAEAZEZA";
var b = "amine amine";


function lowerCase(a) {
    //match(/[A-Z]/, 'g'))
    var chaine = "";
    for(var i=0;i<a.length;i++) {
        if(a.charAt(i).match(/[A-Z]/)) {
             chaine += a.charAt(i).toLowerCase(); 
        }
        else {
            chaine += a.charAt(i);
        }
    }
    return chaine;

}

function upperCase(a) {
    var chaine = "";
    for(var i=0;i<a.length;i++) {
        if(a.charAt(i).match(/[a-z]/)) {
             chaine += a.charAt(i).toUpperCase(); 
        }
        else {
            chaine += a.charAt(i);
        }
    }
    return chaine;

}

function length(a) {
    var compteur=0;
    for(var i=0;i<a.length;i++) {
        compteur++;
    }
    return compteur;
}

function capitalize(chaine,restToLoweropt) {
    
    if(restToLoweropt== true) {
        var nvchaine = "";
        nvchaine = chaine.charAt(0);
        console.log("CAR : " + nvchaine);
        for(var i=1;i<chaine.length;i++) {
            nvchaine += chaine.charAt(i).toLowerCase();
            console.log("LA NOUVELLE CHAINE : " +nvchaine);
    }
}
    
    if(restToLoweropt== null || restToLoweropt==false) {
        console.log("aze");
        return chaine;
    }

    

}

//console.log(length(b));
//console.log(length(a));
console.log(capitalize("One CODE", true));
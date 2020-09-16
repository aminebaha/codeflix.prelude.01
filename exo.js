var a = "AaEAEAZEZA";
var b = "amine amine";


function lowerCase(str = '') {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            sentence += String.fromCharCode(code + 32)
        } else {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}

function upperCase(a) {

    let sentence = ''

    for(let i = 0; i < a.length; i++) {
        const code = a.charCodeAt(i)

        if (code >90) {
            sentence += String.fromCharCode(code - 32)
        } else {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence

}

/*
function upperCase2(a) {
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

}*/

function length(a) {
    var compteur=0;
    for(var i=0;i<a.length;i++) {
        compteur++;
    }
    return compteur;
}



function capitalize(chaine, restToLoweropt) {
    if(restToLoweropt==false) {
        return chaine;
    }
    else {
        var nvchaine =chaine.charAt(0);

        for(var i=1;i<chaine.length;i++) {
            nvchaine+= lowerCase(chaine.charAt(i));
        }
    }
    return nvchaine;
}/*
function capitalize2(chaine,restToLoweropt) {
    
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

    

}*/

//console.log(length(b));
//console.log(length(a));
//console.log(capitalize("One CODE", true));

console.log(capitalize('One CODE',true))
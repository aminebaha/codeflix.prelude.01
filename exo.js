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

function upperCase(str) {

    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

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

function length(str) {
    var count=0;
    
    console.log(str);
    console.log(str.charAt(4));
    while( str.charAt(count)!="") {
        count++;
        //console.log(compteur);
       
    }
    return count;
}



function capitalize(str, restToLoweropt) {
    if(restToLoweropt==false) {
        return str;
    }
    else {
        var newstr =str.charAt(0);

        for(var i=1;i<str.length;i++) {
            newstr+= lowerCase(str.charAt(i));
        }
    }
    return newstr;
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


function decapitalize(str) {
   
var result =""
var splittedStr= str.split(' ');
var chainefinale = ""
for(var i=0;i<splittedStr.length;i++) {
 
    result +=lowerCase(splittedStr[i]) +" ";


}

return result

}

function kebabCase(str) {
    var result = [] 
    result = str.split(' ');
    result = str.split('-');


}
//console.log(capitalize('One CODE',true))
console.log(decapitalize("El Drago aze"));
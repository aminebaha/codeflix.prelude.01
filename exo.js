var a = "Amine Amine";
var b = "amine amine";


function lowerCase(a) {
    return a.toLowerCase();
    console.log(lower);

}

function upperCase(b) {
return b.toUpperCase();
}

function length(a) {
    return a.length;
}

function capitalize(s,restToLoweropt) {
    
    if(restToLoweropt==true) {
        return s.toLowerCase(s.charAt(0));
    }
    return s;

}

console.log(upperCase(a));
console.log(length(a));
console.log(capitalize(b,true));
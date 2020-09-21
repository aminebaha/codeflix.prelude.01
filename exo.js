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
}
function capitalize2(str, restToLoweropt) {
    let sentence = ''
  
    for (let i = 0; i < str.length; i++) {
      if (i === 0 && str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
        sentence += String.fromCharCode(str.charCodeAt(0) - 32)
      } else if (i !== 0 && restToLoweropt && str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        sentence += String.fromCharCode(str.charCodeAt(i) + 32)
      } else {
        sentence += str[i]
      }
    }
  
    return sentence
  }

/*
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

function kebabCase(str=''){
    let sentence = '';
    for (i=0; i < str.length; i++){
        const code = str.charCodeAt(i);
        const codeNext = str.charCodeAt(i-1);
        //console.log(code);
        if (code === 32){
            sentence += "-";
        }
        else if(code >= 65 && code <= 90 && i !== 0 && codeNext !== 45){
            sentence += "-";
            sentence += String.fromCharCode(code+32);
        }
        else if(code >= 65 && code <= 90){
            sentence += String.fromCharCode(code+32)
        }
        else if((i === 0 || i === str.length - 1) && code === 45){
            
        }
        else {
            sentence += str[i];
        }
    }
    return sentence;
}

function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function snakeCase(str= ''){
    let sentence = ''
  
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
  
      if (code === 45) {
        // Get rid of - from the beginning and ending of a string
        continue
      }
  
      if (code === 32) {
        // Replace spaces with -
        sentence += "_"
      } else if (isUpperCase(code)) {
        if (i > 1) {
          // Add - before uppercase
          sentence += "_"
        }
  
        sentence += String.fromCharCode(code + 32)
      } else {
        sentence += str[i]
      }
    }
  
    return sentence
  }

function swapCase(str) {
    var result = "";
    
    //console.log(str.length)
    for(var i=0;i<str.length;i++) {
    
    if(str.charCodeAt(i)>=65 &&str.charCodeAt(i)<=90 ){
        result += str.charAt(i).toLowerCase()

    }else if(str.charCodeAt(i)>90 &&str.charCodeAt(i)<=122){
    result += str.charAt(i).toUpperCase()
}
  else {
  result += str.charAt(i)
    

}
}
return result
}



function charAt(str, position) {

var count = 0
var result =""
for(var i=0;i<str.length;i++) {

   if(i===position) {
       result += str[i]
   }
}
return result


}

function first(str, len) {
    var result=""
    if(len==0) {
        return str.charAt(0)
    }
    for(var i=0;i<len;i++) {
        result += str.charAt(i)
    }
return result
}

function last(str,len) {
    if(len==null || len== '')   {
        return str.charAt(str.length-1)
    }
    var result=[]
    var count =0
    for(var i=str.length-1;i>=0;i--) {

        result [i] = str.charAt(i)
        count++
        if(count==len) {
            break;
        }
        console.log(result)
       
    }
return result.join('')

}

function substr(str, start, len) {

    var result=""
    var count = 0

    if(len>str.length || (start >=str.length && len>0)) {
        return 0
    }

    if(len==0 || len=='' || len==null) {
        for(var j = start;j<str.length;j++) {
            result += str.charAt(j)
        }

        return result
    }
    else {

        for(var i=0;i<len;i++) {
            result += str.charAt(start+i)
            count++
            if(count==i) {
                break;
            }
        }

return result
    }
}

function count(str) {
    var count = 0
    for(var i=0; i<str.length;i++) {
        count++
    }
    return count
}

function slice(str, start, endopt) {



}



function countSubStrings(str, substring) {
    var iteration = 0
    var loopstr =""

    for(var i=0;i<str.length;i++) {
        loopstr += str.charAt(i)
        if(loopstr==substring) {
            iteration++
            console.log(loopstr)
            loopstr =""
            i++;   
        }
    }
return iteration
}

function countWords(str) {

var iteration = 0

if(str.charAt(0)===" " ||str.charAt(0)==="" || str.charAt(0)===null){
    return 0
}
else {
    iteration++
}

console.log(iteration)
for(var i=1;i<str.length;i++) {
console.log(str.charAt(i))

if((str.charCodeAt(i)==32 && str.charCodeAt(i+1)==45) || (str.charCodeAt(i+1)==32 && str.charCodeAt(i)==45)) {
console.log("aaa : " + str.charAt(i))
i++
}
if(str.charAt(i)===" " || (str.charCodeAt(i+1)>=65 && str.charCodeAt(i+1)<90 )){
    //console.log("IF "+str.charAt(i))
    iteration++
   
}

}
return iteration
}

function indexOf(str,search,fromIndexopt) {


var index
for(var i=0;i<str.length;i++) {

if(str.charAt(i)===search){

index = i
console.log(str.charAt(i))
break
}
else {
    index=-1
}

}
return index
}

function lastIndexOf(str, search, fromIndexopt) {
    
var index

for(var i=0;i<str.length;i++) {

if(str.charAt(i)===search){

    index = i

    console.log(str.charAt(i))

}

}
if(index==null) {
    return -1
}
return index
}

function insert(str,toInsertopt,positionopt) {
    var result=""
    for(var i=0;i<=str.length;i++) {
       
        if(i===positionopt) {
            result+=toInsertopt
        
        }
        result += str.charAt(i)
    }
    return result
}

function repeat(str,timesopt) {
var result=""

    for(var i=0;i<timesopt;i++) {
        result +=str
    }
    return result
}
function reverse(str) {

    var result = ""
    for(var i=str.length-1;i>=0;i--) {
        result += str.charAt(i) 
    }
return result

}

function splice(str,start,deleteCountopt,toAddopt) { // A FINIR 
    var result=""
    if(toAddopt==null || toAddopt==""){
        for(var i=deleteCountopt;i<str.length;i++) {
            
            result+=str.charAt(i)
        }
    
        return result
    }
    else if(start<0) {

        for(var i=0;i<str.length-deleteCountopt;i++) {
            result +=str.charAt(i)

        }
        return result + toAddopt   
    }
    else {

        for(var i=str.length-1;i>=deleteCountopt;i--) {
          
            console.log(str[i])
            result +=str.charAt(i)
            
        }
    return toAddopt+reverse(result)
    }
}

function trim (str,whitespaceopt) {
    var regex = reg =/[ ,-]/g;
    const result= str.split(regex)
 
    console.log(result)
    var newstr=""
    for(var i=0;i<result.length;i++) {
        //console.log(result[i].charCodeAt())
        //console.log(result[i])
    
        newstr += result[i]
    }
    result.shift()
    result.pop()
    
    console.log(result)
   /* for(var i=0;i<str.length;i++) {
        if(str.charCodeAt(i)>65 && str.charCodeAt(i+1)>65) {
            result += str.charAt(i)
        }
    }
    return result*/

return result.join(' ')
}
function endsWith(str, end, positionopt) {
    var result=""
    for(var i=0;i<str.length;i++) {
        result +=str.charAt(i)
       // if(result==)
    }
}



//console.log(splice('Tony Tony Chopper',-5,5,'Usopp'));

console.log(trim(" Tony Tony Chopper "))

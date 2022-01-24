/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
function signe(nombre) {
    if (nombre>0){
        return 'POSITIVE'
    }
    else if(nombre<0){
        return "NEGATIVE"
    }
    else{
        return "NUL"
    }
}

console.log(signe(5))
console.log(signe(-3))
console.log(signe(0))
/**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */
function nombresPairs(nombres) {
    let a = 0;
    let result = [];
    while (a <= nombres.length){
        if (nombres[a]%2 === 0){
            result.push(nombres[a]);
        }
        a = a + 1
    }
    return result

}

console.log(nombresPairs([0,5,2,4,9,18,6,7,-4]))

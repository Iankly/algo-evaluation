/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2) {
    let a = 0;
    let result = [];
    if (tableau1.length === tableau2.length){
        while (a < tableau1.length){ // En soit ce while suffit pour la question mais vous m'aviez que ça serait bien si ça pouvait gérer si les deux tableaux avaient pas la même taille
            result.push(tableau1[a],tableau2[a]);
            a = a + 1 ;
        }
        
    }
    if (tableau1.length > tableau2.length){
        while (a < tableau2.length){
            result.push(tableau1[a],tableau2[a]);
            a = a + 1 ;
        }
        while (a < tableau1.length){
            result.push(tableau1[a]);
            a = a + 1 ;
        }
    }
    if (tableau1.length < tableau2.length){
        while (a < tableau1.length){
            result.push(tableau1[a],tableau2[a]);
            a = a + 1 ;
        }
        while (a < tableau2.length){
            result.push(tableau2[a]);
            a = a + 1 ;
        }
    }
    return result
}

console.log(combine([1,2,3],["apple", "orange", "banana"]))
console.log(combine([1,2,3,11,12,13],[4,5,6]))
console.log(combine([1,2,3],[4,5,6,11,12,13]))

/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
function rotate(tableau, offset) {
}

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
function syracuse(nombre) {

}

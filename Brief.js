//Ex1
function permutation(a,b){
  let c = a
  a = b
  b = c
  return ("La nouvelle valeur de a est: " + a + " et la nouvelle valeur de b est: " + b + ".")
}
console.log("Ex1:",permutation(2,6));

//Ex2
var Nom = "toto"
var Age = 30
var Homme = true
console.log ("Ex2:" + " Le nom est " + Nom + ", l'àge est " + Age + " et pour l'homme c'est " + Homme + ".")

//Ex3
function puissance(x){
    let y = Math.pow(x, 2)
    return("Le carré du nombre " + x + " est " + y + ".")
  }
  console.log("Ex3: " + puissance(4))

//Ex3
function somme(a,b){
    let s = a + b
    return("La somme des deux valeurs " + a + " et " + b + " est: " + s + ".")
}
console.log("Ex3: " + somme(6,5))


//Ex3
function minuteToSecond(m){
    let s = m * 60
    return("Les " + m + " minutes vauent " + s + " secondes.")
}
console.log("Ex3: " + minuteToSecond(5))

//Ex4
function increment(x){
    let y = x++
    return("L'incrémentation du nombre " + y + " est " + x + ".")
}
console.log("Ex4: " + increment(6))

//Ex5
function surface(b,h){
    let s = (b * h)/2
    return("La surface du triangle est: " + s + ".")
}
console.log("Ex5: " + surface(5,8))

//Ex6
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return ("L'inverse du string " + str + " est " + reversedStr) + ".";
}
console.log("Ex6: " + reverseString("Amine"))

//Ex7
function getMax(x,y,z) {
  let max = Math.max(x,y,z)
  return ("Le nombre maximum des 3 nombres " + x + " ," + y + " et " + z + " est " + max + ".")
}
console.log("Ex7: " + getMax(10,1,18))

//Ex8
function getFirst(){
  let arr = [8,15,74,9]
  let first = arr[0]
  return ("Le premier élément du tableau est " + first + ".")
}
console.log("Ex8: " + getFirst())

//Ex10
function resteDiv(x,y){
    let modulo = x % y
    return ("Le reste de la division de " + x + " sur " + y + " est égale à " + modulo + ".")
}
console.log("Ex10: " + resteDiv(10,3))

//Ex11
function check(x,y){
    let s = x + y
    let result
    if (s < 100) {
      result = true
    }
    else {
        result = false
    }
    return("Le résultat de la somme de " + x + " et " + y + " est " + result + ".")
}
console.log("Ex11: " + check(50,11))


//Ex12
function hourToSecond(h){
    let s = h * 3600
    return("Les " + h + " heures vauent " + s + " secondes.")
}
console.log("Ex12: " + hourToSecond(15))


//Ex13
function checkNbr(n){
    if (n <= 0) {
        result = true
      }
    else {
          result = false
      }
    return("L'état du nombre " + n + " est " + result + ".")
}
console.log("Ex13: " + checkNbr(-5))

//Ex14
function isEqual(nbr1,nbr2){
    let r = nbr1 - nbr2
    if (r = 0) {
        result = true
      }
    else {
          result = false
      }
      return("L'état des deux nombres " + nbr1 + " et "  + nbr2 + " est " + result + ".")
    }
    console.log("Ex14: " + isEqual(7,5))

//Ex15
function isDivisible(x){
    if (x % 0) {
        result = true
      }
    else {
          result = false
      }
      return("L'état du nombre " + x + " est " + result + ".")  
}
console.log("Ex15: " + isDivisible(8))

//Ex16
function hmTos(h,m){
   let result1 = h * 3600
   let result2 = m * 60
   let result = result1 + result2
   return(h + " heure(s) et " + m + " minute(s) vauent " + result + ".")  
}
console.log("Ex16: " + hmTos(1,10))

//Ex18
function getLast(){
    let arr = [8,15,74,9]
    let last = arr[arr.length - 1]
    return ("Le dérnier élément du tableau est " + last + ".")
  }
  console.log("Ex18: " + getLast())

//Ex19
function checkEq(x,y){
    if ( x === y) {
        result = true
      }
    else {
        result = false
      }
      return("L'état des deux éléments "+ x + " et " + y + " est " + result + ".")
    }
    console.log("Ex19: " + checkEq('5',5))

//Ex20
function isEmpty(ch){
    if (ch === " ") {
        return ("L'état de la chaine " + ch + " est " + true + ".")
    }
    else {
        return ("L'état de la chaine " + ch + " est " + false + ".")
    }
}
console.log("Ex20: " + isEmpty("Amine"))



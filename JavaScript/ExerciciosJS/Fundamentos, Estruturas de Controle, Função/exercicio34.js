/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

function comparaString(s1, s2) {
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    let letras1, letras2
    let trueFalse = undefined

    for (i = 0; i < s1.length; i++) {
        for (p = 0; p < s2.length; p++) {
            letras1 = s1.charAt(i)
            letras2 = s2.charAt(p)
            if (letras1 == letras2) {
                trueFalse = true
                break
            } else {
                trueFalse = false
            }
        }
        return trueFalse
    }
}

console.log(comparaString("brasil", "lbirsa"))
console.log(comparaString("abc", "cba"))
console.log(comparaString("laura", "arual"))

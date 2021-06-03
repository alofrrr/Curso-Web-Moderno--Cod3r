const escola = "cod3r"

console.log(escola.charAt(4)) //imprime a letra na posição 4
console.log(escola.charAt(5)) //imprime espaço vazio pois nao tem letra na posição 5
console.log(escola.charCodeAt(3)) //imprime cod tabela ascii
console.log(escola.indexOf(3)) //posição do numero

console.log(escola.substring(1)) //imprime a partir do indice 1
console.log(escola.substring(0, 3)) //imprime a partir do indice 0 ate o indice 3

console.log('Escola '.concat(escola).concat('!')) //concatenar é juntar basicamente kkkk
console.log("Escola " + escola + '!') //concatenar com +
console.log(escola.replace(3, 'e')) //substituir

console.log('Ana,Maria,Pedro'.split(',')) //transforma em array, tem que mostrar o que quer usar pra fazer a separação, ex: (',').3
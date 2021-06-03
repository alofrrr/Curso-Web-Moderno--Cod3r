//como usar boolean

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//boolean com valores numericos:

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)

//'!' é negação, '!!' anula negação

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') //strig vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('Pra finalizar...')
console.log(!!('' || null || ' ' || 0))
console.log(('' || null || 0 || 'mostra o unico verdadeiro'))

let nome = ''
console.log(nome || 'Desconhecido') 

/*por estar vazio, a variavel nome é tida como falsa, nesse caso se imprime "Desconhecido"
Isso nao aconteceria se nome estivesse preenchido:*/

nome = 'Conhecido'
console.log(nome || 'Desconhecido') 

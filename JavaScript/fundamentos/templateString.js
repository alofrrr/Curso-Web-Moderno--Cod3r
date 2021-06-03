const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá 
    ${nome}!`

console.log(concatenacao, template)

//expressoes...
//tem que usar o simbolo de dolar entre chaves
//exemplo:

console.log(`1 + 1 = ${1 + 1}`)

//lembrando que templates string sao delimitados com `...` e a função chamada com ${...}
//função para tornar letras maiusculas:

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
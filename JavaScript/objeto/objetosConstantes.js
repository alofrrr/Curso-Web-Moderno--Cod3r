//pessoa aponta para um endereço de memoria de forma constante
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


//pessoa -> 456 -> {...}
//pessoa = { nome: 'ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'rua abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
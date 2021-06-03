//novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 30,
    }
}

//const nome = pessoa.nome
//console.log(nome)

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
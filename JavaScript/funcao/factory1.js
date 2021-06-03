const prod1 = {
    nome: '...',
    preco: 45

}

const prod2 = {
    nome: '..',
    preco: 45
}

//para nao ter que recorrer a isso basta criar uma função factory

//factory simples
function criarPessoa(){
    return{
        nome: 'ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

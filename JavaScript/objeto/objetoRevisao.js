// coleção dinamica de pares chaves/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca dp produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
    {
nome: 'ana',
idade: 42
    }],
    calcularValorSeguro: function(){
        //....
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
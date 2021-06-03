// {} representa objeto
// [] representa array
//é possivel criar objetos de fora literal e ir preenchendo depois

const prod1 = {}
prod1.nome = 'Nomeando um objeto'
prod1.preco = 'R$ 4.899,00'
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90, //é possivel aninhar objetos
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
// Object.preventExtensions

const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag:'promoção'
})
console.log('extensivel:', Object.isExtensible(produto))

//o que nao é permitido é adicionar novos objetos, mas pode deletar ou modificar
produto.nome='borracha'
produto.descricao='borracha escolar branca'
delete produto.tag
console.log(produto)

//object.seal / selar objetos
const pessoa = {nome:'juliana', idade:35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))
//so é permitido alterar mas nao pode excluir nem adicionar
pessoa.sobrenome='silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//object.freeze que é pra congelar

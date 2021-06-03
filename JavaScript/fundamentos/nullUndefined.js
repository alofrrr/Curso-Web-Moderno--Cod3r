let valor //nao inicializada
console.log(valor)

valor = null //null significa ausencia de valor
console.log(valor)
//console.log(valor.toString()) //ERRO!

//nao da erro pois nao esta nulo, so esta indefinido
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar distribuir undefined
console.log(!!produto.preco)
//delete produto.preco //se quiser deletar o atributo de um objeto
console.log(produto)

produto.preco = null //sem preco definido
console.log(!!produto.preco)
console.log(produto)
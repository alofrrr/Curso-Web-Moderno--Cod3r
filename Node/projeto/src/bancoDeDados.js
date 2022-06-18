const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || 'Produto não encontrado'
}

function getProdutos() {
    return Object.values(produtos)
}

function deleteProduct(id) {
    delete produtos[id]
    return 'Produto deletado com sucesso'
}

module.exports = { salvarProduto, getProduto, getProdutos, deleteProduct }

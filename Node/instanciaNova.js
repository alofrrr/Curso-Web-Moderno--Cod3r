//uma factory retorna uma nova isntancia/novo objeto

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

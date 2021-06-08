/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas*/


function inverteChaveEValor(objeto) {
    Object.entries(objeto).forEach(([chave, valor]) => {
        console.log(`${valor}: ${chave}`)
})
    }
inverteChaveEValor({ a: 1, b: 2, c: 3})
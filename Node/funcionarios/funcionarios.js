const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const mulheresChinesas = f => f.pais === 'China' && f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
//tradução dai de cima, se funcionario acumulador for menor que funcionario atual entao retorne o salario do func, caso contrario retorne o atual
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    //mulher chinesa com menor salario?

    const func = funcionarios.filter(mulheresChinesas).reduce(menorSalario)

    console.log(func)
})



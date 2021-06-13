//console.log(global)

globalThis.MinhaApp =Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

//ao criara variaveis globais o ideal é congelar pois se nao elas podem ser alteradas kk
//evitar mexer no escopo global
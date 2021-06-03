/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)*/

const pontuacoesString = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function comparaValores(pontuacoesString) {
    const pontuacoes = pontuacoesString.split(', ')
    let menorPontuacao = pontuacoes[0]
    let maiorPontuacao = pontuacoes[0]
    let recordes = 1
    let piorjogo = 1


    for (let i = 1; i < pontuacoes.length; i++) {
        if (maiorPontuacao < pontuacoes[i]) {
            maiorPontuacao = pontuacoes[i]
            recordes++
        } else if (menorPontuacao > pontuacoes[i]) {
            menorPontuacao = pontuacoes[i]
            piorjogo = i + 1
        }

    }
    console.log('Pedro quebrou seu recorde ' + recordes + ' vezes.')
    console.log('O pior jogo de Pedro foi seu ' + piorjogo + '° jogo.')
}
comparaValores(pontuacoesString)
/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes. Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro*/


function comparaPalavra(iniciais, conjunto){
    const NovoArray =[]

    for(let palavra of conjunto){
        if(palavra.includes(iniciais)){
            NovoArray.push(palavra)
        }
    }
    console.log(NovoArray)
}

comparaPalavra("pro", ["programação", "mobile", "profissional"])

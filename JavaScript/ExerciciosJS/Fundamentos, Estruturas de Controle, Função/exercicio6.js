/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/


function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
   let montanteJS = capitalInicial + ((capitalInicial / 100) * taxaDeJuros * tempoDeAplicacao)
   return montanteJS;
}


console.log(`O montante da aplicação financeira sob regime de juros simples é ${jurosSimples(2789, 0.30, 5).toFixed(2)} `)

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    taxaDeJuros = taxaDeJuros / 100
    let montanteJC = capitalInicial * ((1 + taxaDeJuros) ** tempoDeAplicacao )
    return montanteJC;
 }
 
 
 console.log(`O montante da aplicação financeira sob regime de juros compostos é ${jurosCompostos(5678 , 2.56, 5).toFixed(2)} `)
 
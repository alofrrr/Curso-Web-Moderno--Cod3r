/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function lanchonete(cod, quant) {
    switch (cod) {
        case 100:
            console.log(`Seu pedido de ${quant} cachorro(s) quente(s) dará ${3 * quant} reais`)
            break
        case 200:
            console.log(`Seu pedido de ${quant} hamburguer(s) simples(s) dará ${4 * quant} reais`)
            break
        case 300:
            console.log(`Seu pedido de ${quant} cheeseburguer(s) dará ${5.5 * quant} reais`)
            break
        case 400:
            console.log(`Seu pedido de ${quant} bauru(s) dará ${7.5 * quant} reais`)
            break
        case 500:
            console.log(`Seu pedido de ${quant} refrigerante(s) dará ${3.5 * quant} reais`)
            break
        case 600:
            console.log(`Seu pedido de ${quant} suco(s) dará ${2.8 * quant} reais`)
            break
        default:
        console.log('O produto não existe no cardápio!')
    }
}

lanchonete(100, 3)
lanchonete(200, 2)
lanchonete(300, 2)
lanchonete(400, 3)
lanchonete(500, 2)
lanchonete(600, 2)
lanchonete(700, 3)
lanchonete(800, 2)
lanchonete(300, 5)
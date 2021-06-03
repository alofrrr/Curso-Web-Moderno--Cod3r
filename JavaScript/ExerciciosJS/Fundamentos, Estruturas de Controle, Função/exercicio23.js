/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function media(matricula, nota1, nota2, nota3) {
    if (matricula > 0) {
        if (nota1 > nota2 && nota1 > nota3) {
            total = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
        } else if (nota2 > nota1 && nota2 > nota3) {
            total = (nota2 * 4 + nota1 * 3 + nota3 * 3) / 10
        } else {
            total = (nota3 * 4 + nota1 * 3 + nota2 * 3) / 10
        }
        total = total.toFixed(2)
        if (total > 5) {
            console.log(`O aluno de matricula ${matricula} obteve as notas ${nota1}, ${nota2}, ${nota3}. A média ponderada das notas é ${total} e o aluno está APROVADO!`)
        } else if (total < 5) {
            console.log(`O aluno de matricula ${matricula} obteve as notas ${nota1}, ${nota2}, ${nota3}. A média ponderada das notas é ${total} e o aluno está REPROVADO!`)
        }
    } else {
        console.log('Código Inválido!')
    }
}

media(0, 7.8, 7.5, 6.4)
media(201, 7.8, 7.5, 6.4)

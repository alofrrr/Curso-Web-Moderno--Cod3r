//criando uma função pelo objeto pessoa e acessando com this
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

//como chamar
pessoa.falar()

//para acessar nesse contexto so com this

const falar = pessoa.falar
falar() //conflito entre paradigmas: programação funional e programação orientada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) //chamando atraves do bind voce aponta que this sempre sera o objeto pessoa

falarDePessoa()

//sempre que referenciar this, ele sera o objeto que passou pra função bind

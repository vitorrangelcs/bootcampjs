//como o objeto vai retornar a mesma coisa, do tipo nome:nome, idade:idade, não precisamos repetir esses campos, podemos simplismente fazer
//nome, idade
function criaPessoa(nome,sobrenome,idade){
    return {
        nome, sobrenome, idade
    }
}

const pessoa = criaPessoa('Luiz', 'Otavio', 23);
console.log(pessoa);

const pessoa2 = criaPessoa('Fabio', 'jr', 23);
console.log(pessoa2);

const pessoa3 = criaPessoa('Antonio', 'cerqueira', 23);
console.log(pessoa3);

const pessoa4 = criaPessoa('Lorrane', 'soares', 23);
console.log(pessoa4);

const pessoa5 = criaPessoa('Pablo', 'Jose', 23);
console.log(pessoa5);


//podemos colocar uma funcao em um objeto

console.log("-----------------------------------")
const pessoaComFuncao = {
    nome:"pablo", 
    sobrenome: "luiz",
    idade:20,

    fala(){
        console.log(`Meu nome é ${this.nome} e meu sobrenome é ${this.sobrenome}, minha idade é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    },

    minhaIdadeAtual(){
        console.log(`Minha idade atual é ${this.idade}`);
    }
}

pessoaComFuncao.fala();
pessoaComFuncao.minhaIdadeAtual();
pessoaComFuncao.incrementaIdade();
pessoaComFuncao.minhaIdadeAtual();
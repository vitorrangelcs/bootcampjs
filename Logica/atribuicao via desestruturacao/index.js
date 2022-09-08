const pessoa = {
    nome: 'Luis',
    sobrenome: 'Miranda',
    idade: 30,
    restricoes: 'N',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome} = pessoa
console.log(nome);

//podemos pegar mais de uma ao mesmo tempo. 
const {sobrenome, idade} = pessoa;

//ou seja colocamos entre chaves a chave valor e chamamos o objeto, o código entenderá que aquele objeto possui aquela chave. 
// caso façamos isso e a chave não exista, ele atribuirá undefined. Mas podemos colocar um padrão para caso não exista

//caso não exista ele colocará um valor padrão. caso exista, ele colocará o valor encontrado
console.log('---------------------------')
const {fabrica = 'não existe'} = pessoa;
console.log(fabrica);


//pegar os dados de um objeto dentro do objeto, como no caso de endereço
console.log('---------------------------')
const{endereco: {rua, numero}, endereco} = pessoa
console.log(rua);

//depois que fecha a primeira } poderiamos colocar endereço, ele pegaria os especificos + endereco completo, conforme tá no exemplo da linha 27.

//podemos dá um outro nome a váriavel, também podemos dar outro nome e fazer a atribuição para caso nao exista
//fizemos o exemplo do novo nome de variavel com rua, o seu novo nome é r, e o de reatribuição caso não exista fizemos com num
console.log('---------------------------')
const{endereco: {rua: r, numero: num = 30}} = pessoa
console.log(r);


//podemos pegar o resto tb
console.log('---------------------------')
const {restricoes, ...resto} = pessoa;
console.log(restricoes);
console.log(resto);


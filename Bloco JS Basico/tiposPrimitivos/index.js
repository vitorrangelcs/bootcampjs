const nome = 'luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `luiz`; //string;

const num1 = 10;
const num2 = 12.50; //number;


let nomeAluno; // undefined, ou seja não aponta pra nada. PS não podemos declarar uma variavel undefined.
const sobrenomeAluno = null; // nulo, não aponta pra lugar nenhum da memoria, mas esse tipo de dado podemos passar;

let aprovado = true; // só tem a possibilidade de true ou false.

//para ver o tipo


console.log(typeof nome, nome); //vai retornar o tipo string e o valor
console.log(typeof num1, num1); //vai retornar number e o valor;
console.log(typeof nomeAluno, nomeAluno); //vai retornar undefined em ambos;
console.log(typeof sobrenomeAluno, sobrenomeAluno); //null vai ser considerado um objeto, é um bug do js
console.log(typeof aprovado, aprovado); // o tipo é booleano, vai retornar um true



//////////////////// TIPO DE DADO PRIMITO X POR REFERENCIA.

const a = [1,2];
const b = a;

console.log(a,b); //ambos terao 1, 2

//ambas tem o mesmo valor, 

//vamos adicionar um novo valor

b.push(3);

console.log(a,b); //ambos terão 1,2,3

//ou seja, os valores vão ficar nos dois, pois era por referencia

// cuidado referencia é só em arrays por ex.

const c = 2;
const d = c;

//isso não é referencia.
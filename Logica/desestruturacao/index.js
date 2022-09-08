

const numero = [100,200,300,400,500,600,700,800,900];

//pegando as duas primeiras posições, os ... significa pegue o resto(o que não foi pegado até aqui) e coloque nessa variavel
const [primeiroNumero, segundoNumero, ...resto] = numero;

console.log(primeiroNumero,  segundoNumero);

console.log(resto);

//podemos pular valores que não queremos
// pulamos deixando em branco
const [um, , três, , cinco] =numero;

console.log(um, três, cinco);


/// em um caso de uma lista com listas dentro

const numeros = [[1,2,3], [4,5,6], [7,8,9]];

//facilita quebrando a lista de lista em listas individuais;
const [lista1, lista2, lista3] = numeros;

console.log(lista1);
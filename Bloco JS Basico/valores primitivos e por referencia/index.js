let a = 'A';
let b = a;
console.log(a);
console.log(b);

//isso é uma mera copia, podemos alterar o valor de A e ele não será alterado em B.
console.log("------------------->")
a = 'C'
console.log(a);
console.log(b);

console.log("------------------->");


//no caso de arrays

let c = [1,2,3];
let d = c;
console.log(c);
console.log(d);

//nesse caso temos uma referencia, se alterar em c vai alterar em d e vice versa.

d.push(4)
console.log(c);
console.log(d);

//adicionei em um e serviu para os dois.

//os primitivos sao valores copiados.
//ou seja, tudo depende do tipo
//primitivos (imutaveis)- string, number, boolean , undefined, null(bigint, symbol) - Valores copiaveis
//referencia (mutável) - array, object, function - passados por referencia.

console.log("------------------->");
//como copiar o valor 
//dessa forma o valor de f será totalmente indepentende
let e = [1,2,3];
let f = [...e];

e.push(4);
console.log(e);
console.log(f);



console.log("------------------->");
//objetos também referenciam 

const pessoa = {
    nome: "luiz",
    sobrenome: "otavio",
}

const pessoab = pessoa;

pessoa.nome= 'João';
console.log(pessoa);
console.log(pessoab);

//pra copiar é a mesma forma da lista

const pessoac = {... pessoa}

//dessa forma, elas não estão ligadas.
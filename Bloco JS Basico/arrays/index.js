const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

alunos[0] = 'Eduardo';
console.log(alunos);


//queremos adicionar um item ao ultimo elemento, mas dessa forma não é uma boa. Pq podemos não saber o final do nosso array.
alunos[3] = 'Luiza';
console.log(alunos);

//forma correta

alunos[alunos.length] = 'Vitor';
console.log(alunos);


//mas há outra forma de adicionar ao final. Até mais prática.
alunos.push('Otávio');
console.log(alunos);

//Para adicionar no começo em vez do final. 

alunos.unshift('Lorrane');
console.log(alunos);


//removendo do fim
alunos.pop();
console.log(alunos);

//podemos salvar o item do pop
const removido = alunos.pop();
console.log(removido);
console.log(alunos);


//removendo do inicio
const removido2 = alunos.shift();
console.log(removido2);
console.log(alunos);

//podemos apagar algo
delete alunos[1];
console.log(alunos);

//a posiçaõ que foi apagada, continua existindo, mas com o conteudo vazio.

// em javascript podemos até acessar uma posição inexistente. 
console.log(alunos[100]);
//ele não quebrará o codigo, apenas mostrará undefined.


// compensando o que apagamos

alunos[1] = 'Pablo';

//podemos usar corte também em arrays
console.log(alunos)
console.log(alunos.slice(0,3));

//também de forma negativa, dizendo que queremos até o final menos.
console.log(alunos.slice(0,-1));


//se a gente dá um type of no array ele vai retornar pra gente um array.
console.log(typeof alunos);

//mass temos como saber da seguinte forma;
console.log(alunos instanceof Array);
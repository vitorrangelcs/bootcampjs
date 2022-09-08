const nome = 'Luiz Otávio';

//for classico - geralmente com iteraveis(array ou stirngs)
// for in - retorna o indice ou a chave (string, array ou objetos)
// for of - retorna o valor em si( iteraveis, arrays, strings)

//não funciona pra objetos
for(let valor of nome){
    console.log(valor);
}

console.log('-------------->')
const nomes = ['Lorrane', 'Vitor'];

for(let valor of nomes){
    console.log(valor);
}

console.log('-------------->')
nomes.forEach((elemento) =>{
    console.log(elemento)
})


//colocar o indice é opcional no forEach
console.log('-------------->')
nomes.forEach((elemento, indice) =>{
    console.log(elemento, indice)
})


//exibir o array todo além do indice
console.log('-------------->')
nomes.forEach((elemento, indice, array) =>{
    console.log(elemento, indice, array)
})
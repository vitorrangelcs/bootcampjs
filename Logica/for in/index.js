const frutas = ['pera', 'maça', 'uva'];

///----> for in lẽ chaves ou indices do objeto
for (let indice in frutas){
    console.log(indice);
    console.log(frutas[indice]);
}


const pessoa = {
    nome: 'Vitor',
    sobreNome: 'Rangel',
    idade :20
}

console.log('----------------------')

for (let chaves in pessoa){
    console.log(chaves);
    console.log(pessoa[chaves]);
}
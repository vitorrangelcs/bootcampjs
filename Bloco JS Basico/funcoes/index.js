function saudacao(nome){
    return `Bom dia ${nome}!`;
}

const saudacaoValor = saudacao('Vitor');
console.log(saudacaoValor);


function soma(x, y ){
    return x+y;
}

console.log(soma(2,2));

//podemos colocar pra função assumir um valor caso nada seja passado pra ela
function soma2(x =1, y =1){
    return x+y;
}

console.log(soma2());
console.log(soma2(5,6))


//////////////////////////////////// Funções anonimas;
//aqui ela tem de terminar com ;
console.log('---------------------------------------------------------');
const raiz = function (n) {
    return n**0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

console.log('---------------------------------------------------------');

///////////////////////////////////ArrowFunction
//ela recebe n e faz o calculo da raiz

const raiz2 =  (n) => {
    return n**0.5;
};

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));

console.log('---------------------------------------------------------');

// podemos simplificar essa arrowfunction
//como ela só recebe um parametro podemos retirar os parenteses, como ela so faz uma instrução, podemos retirar o return e o { }
const raiz3 = n => n**0.5;


console.log(raiz3(9));
console.log(raiz3(16));
console.log(raiz3(25));

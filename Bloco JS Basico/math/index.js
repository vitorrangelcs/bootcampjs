let num1 = 9.54578;
// floor arredonda pra baixo
let num2 = Math.floor(num1);
console.log(num2);

//ceil pra cima
num2 = Math.ceil(num1);
console.log(num2);

// ele arrendoda, mas tem algumas regras. Se o valor for por ex 9.49 ele arrendoda pra baixo 9, se for 9.51 ele arredonda pra cima 10.
num2 = Math.round(num1);
console.log(num2);


//achar o maior numero de uma sequencia
console.log(Math.max(1,2,3,4,600,7,602,1000,-2));

//menor numero
console.log(Math.min(1,2,3,4,600,7,602,1000,-2));

//randomico, gera numero aleatorio
console.log(Math.random())


// o que fazer com o numero aleatorio
//aqui teremos um numero aleatorio entre 10 e 5
const randomico = Math.random() * (10 -5) +5;
console.log(randomico)


//valor de pi

console.log(Math.PI);


//elevar numero, no caso, 2^10
console.log(Math.pow(2,10));
//mas podemos usar ** no lugar disso.


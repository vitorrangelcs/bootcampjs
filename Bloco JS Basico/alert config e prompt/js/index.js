alert('Com nossa mensagem');
const confirma = confirm('deseja apagar');


let num1 = prompt('Digite um numero');
let num2 = prompt('digite um segundo numero');

let result = Number(num1) + Number(num2);

//poderia ter feito isso 

num1 = Number(num1);
num2 = Number(num2);

console.log(result);

alert(`o resultado foi ${result}`);
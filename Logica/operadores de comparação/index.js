/* 
operadores de comparação:
> maior que
>= maior que ou igual a 
< menor que 
<= menor que ou igual a 
== igual (não é muito recomendavel, testa valor)
=== igualdade estrita (testa valor e tipo)
!= diferente (não é muito recomendavel, testa valor)
!== diferente estrito (testa valor e tipo)
*/

console.log(10 > 5);

const comp = 10 >= 10;
console.log(comp);

const num1 = 10; 
const num2 = '10';
const comp2 = num1 == num2;
console.log(comp2);
//essa só testou os valores, não o tipo
//essa comparação não é uma boa, podemos acabar comparando tipos diferentes, o ideal é:

//essa testou o valor e o tipo
const comp3 = num1 === num2;
console.log(comp3)
/*
&& -> Tudo precisa ser verdadeiro pra voltar verdadeiro. Se achou uma expressão falsa, ele já para, não continua caso haja outras expressões
|| -> tudo precisa ser falso pra voltar falso.
*/

/* valores avaliados em falso no javascript
FALSY
false
0
'' "" ``
null / undefined 
NaN
*/

console.log('Luiz' && 'Maria');
console.log('Luiz');


//aqui um exemplo de curto circuito.
//ele não vai rodar a condição inteira, ele vai parar já no luiz otávio pq é o primeiro verdadeiro
console.log(0|| null || 'Luiz Otávio' || true);

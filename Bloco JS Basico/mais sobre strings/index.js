let umaString = "um \"texto\""; 
console.log(umaString)
//barra invertida é caracter de escape

//pra exibir barra invertida precisamos de duas barras invertidas

umaString= "\\";
console.log(umaString);

umaString= " olá mundo tudo bem";

//podemos pegar uma letra especifica

console.log(umaString[2]);

console.log(umaString.charAt(2));

//mesma coisa os dois, só muda que o charat é mais tranquilo

//concatenar

console.log(umaString.concat(' em um belo dia'));
console.log(`${umaString} em um belo dia`)
//ou várias variaveis.

//achar um indice;
//se ele retornar -1 significa que não achou
console.log(umaString.indexOf('bem'));

//pegando do final

console.log(umaString.lastIndexOf('bem'))

//podemos passar uma expressao regular

console.log(umaString.match(/[a-z]/));

//temos o search que ele vai retornar o indice, semelhante ao indexof, mas ele aceita expressão regular

console.log(umaString.search(/mundo/));


// replace faz troca, e aceita também expressões regulares;

console.log(umaString.replace('bem', 'querer'));

//pegar tamanho de ma string

console.log(umaString.length);


//slice, fatear.
//primeiro parametro é de onde começa e o segundo onde termina
//se passar só um, ele vai considerar esse numero como de onde começa e vai até o fim.

console.log(umaString.slice(5,10))

//podemos usar substring no lugar de slice.

//podemos dividir com split, no exemplo vamos dividir pelo espaço

console.log(umaString.split(' '));

//posso passar quantas vezes eu quero que isso ocorra
console.log(umaString.split(' ', 2));


//tudo maisculo
console.log(umaString.toUpperCase());

//tudo minusculo 
console.log(umaString.toLowerCase());
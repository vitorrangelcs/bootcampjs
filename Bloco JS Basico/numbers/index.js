let num1 = 10.256265;
let num2 = 2.5; 

//os exemplos acima são number


//passando o numero pra string
console.log(num1.toString())


//representação binária, melhor com numeros inteiros
console.log(num1.toString(2));


//com apenas duas casas decimais

console.log(num1.toFixed(2));



//bug do js
let num3 = 0.7;
let num4 = 0.1;

soma = num3 + num4;

console.log(soma);

//outro exemplo 

let num5 = num3;

num5 += num4; //0.8
num5 += num4; //0.9
num5 += num4; //1.0

//na teoria tá ok, na pratica

console.log(num5);

//poderia resolver com fixed, que iria arredondar as casas decimais?

num5 = num5.toFixed(2);
//como o resultado seria 1.00, e esse numero é redondo poderiamos testar e ver se ele é um inteiro. Deve funcionar.
console.log(Number.isInteger(num5));

//mesmo exibindo o 1.00 não resolve

console.log(num5);

//aqui temos o numero já fixado com 2 digitos, então podemos simplismente passar ele pra float, e agora dará certo
num5 = parseFloat(num5);
console.log(Number.isInteger(num5));



//essa parte da imprecisão é importante, podemos ter uma discrepancia em calculos. Aqui vemos como contornar.
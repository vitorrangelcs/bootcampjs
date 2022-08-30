const numero = Number(prompt('Insira um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const textoDiv = document.getElementById('texto')

const numeroRaiz = document.getElementById('numero-raiz');
const numeroInteiro = document.getElementById('numero-inteiro');
const numeroNan = document.getElementById('numero-nan');
const numeroBaixo = document.getElementById('numero-baixo');
const numeroCima = document.getElementById('numero-cima');
const numeroCasas = document.getElementById('numero-casas');

numeroTitulo.innerHTML = numero;
numeroRaiz.innerHTML= Math.sqrt(numero);
numeroInteiro.innerHTML = Number.isInteger(numero);
numeroNan.innerHTML = Number.isNaN(numero);
numeroBaixo.innerHTML = Math.floor(numero);
numeroCima.innerHTML = Math.ceil(numero);
numeroCasas.innerHTML = numero.toFixed(2);



////////////////////////// ou poderia ser feito assim

textoDiv.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}.`
textoDiv.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}.`
textoDiv.innerHTML += `<p> ${numero} é NaN: ${Number.isNaN(numero)}.`
textoDiv.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}.`
textoDiv.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}.`
textoDiv.innerHTML += `<p> Com duas casas decimais : ${numero.toFixed(2)}.`
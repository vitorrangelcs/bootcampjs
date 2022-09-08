const data = new Date();

console.log(data.toString(0));


//podemos passar uma data da nossa forma

//ano, mes, dia, hora, minutos, segundos e milisegundos
const date2 = new Date(2020, 04, 04,15,30,01,500);
console.log(date2);

//podemos fazer com string
const date3 = new Date('2021-02-06 20:20:59');
console.log(date3.toString());

//pegando dia

console.log('dia', date3.getDate()); //pega o dia do mês
console.log('mes', date3.getMonth()); //o mês começa em 0
console.log('ano', date3.getFullYear());
console.log('hora',date3.getHours());
console.log('min',date3.getMinutes());
console.log('seg', date3.getSeconds());
console.log('ms', date3.getMilliseconds());
console.log('Dia da semana', date3.getDay()) // pega o dia da semana S, T , Q. 0 é domingo e 6 é sabado
console.log(data.toString());


//no javascript podemos pegar a data em milisegundos e colocar no new date


function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const milisegundos = zeroAEsquerda(data.getMilliseconds());

}


function zeroAEsquerda(num){
    return num >= 10 ? num : `0{num}`
}
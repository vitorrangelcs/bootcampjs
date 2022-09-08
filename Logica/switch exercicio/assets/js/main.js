const resultado = document.querySelector('.container h1');

const data = new Date;
const teste  = data.getDay();
let diaDaSemana = getDiaDaSemana(teste);
let mes = getMonth(data.getMonth());
let msg = `${diaDaSemana}, ${data.getDate()} de ${mes} do ano ${data.getFullYear()}`;

resultado.innerHTML = msg;


function getDiaDaSemana(diaDaSemana){
    let diasSemanaTexto;
    switch(diaDaSemana){
        case 0:
            diasSemanaTexto = 'Domingo';
            return diasSemanaTexto;
        case 1:
            diasSemanaTexto = 'Segunda';
            return diasSemanaTexto;
        case 2:
            diasSemanaTexto = 'Terça';
            return diasSemanaTexto;
        case 3:
            diasSemanaTexto = 'Quarta';
            return diasSemanaTexto;
        case 4:
            diasSemanaTexto = 'Quinta';
            return diasSemanaTexto;
        case 5:
            diasSemanaTexto = 'Sexta';
            return diasSemanaTexto;
        case 6:
            diasSemanaTexto = 'Sabado';
            return diasSemanaTexto;
    }
    return diasSemanaTexto;
}

function getMonth(month){
    let mesEmTexto;
    switch(month){
        case 0:
            mesEmTexto = 'Janeiro';
            return mesEmTexto;
        case 1:
            mesEmTexto = 'Fevereiro';
            return mesEmTexto;
        case 2:
            mesEmTexto = 'Março';
            return mesEmTexto;
        case 3:
            mesEmTexto = 'Abril';
            return mesEmTexto;
        case 4:
            mesEmTexto = 'Maio';
            return mesEmTexto;
        case 5:
            mesEmTexto = 'Junho';
            return mesEmTexto;
        case 6:
            mesEmTexto = 'Julho';
            return mesEmTexto;
        case 7:
            mesEmTexto = 'Agosto';
            return mesEmTexto;
        case 8:
            mesEmTexto = 'Setembro';
            return mesEmTexto;
        case 9:
            mesEmTexto = 'Outubro';
            return mesEmTexto;
        case 10:
            mesEmTexto = 'Novembro';
            return mesEmTexto;
        case 11:
            mesEmTexto = 'Dezembro';
            return mesEmTexto;
    }
    return mesEmTexto;

}


//poderia ser simplismente isso 
const databr = new Date();
data.toLocaleDateString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
})

//resolvido em 4 linhas.
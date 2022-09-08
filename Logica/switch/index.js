const data = new Date();
const diaDaSemana = data.getDay();
console.log(diaDaSemana)
let diasSemanaTexto = getDiaDaSemana(diaDaSemana);
console.log(diasSemanaTexto);


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
/* 
Entre 0-11 - bom dia
12 - 17 boa tarde
18 - 23 - boa noite

*/


// if pode ser usado sozinho, ou pode ser usado
//sempre que uso else preciso de um if.
//não é bom, mas posso ter vários else ifs
//só posso ter um else
// podemos ter apenas if com else ou apenas if sem else

const hora = 10;

if(hora >= 0 && hora <= 11){
    console.log("Bom dia");

    console.log(1+1);
}else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde')
}else if (hora <= 18 && hora <= 23){
    console.log('Boa noite');
}else{
    console.log('Olá, hora invalida')
}


const tenhoGrana = true;

if(tenhoGrana){
    console.log('Vou sair de casa');
}else{
    console.log('Não vou sair de casa');
}
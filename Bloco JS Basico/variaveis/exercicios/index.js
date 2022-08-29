const nome = 'Luiz Otávio Miranda';
let idade = 33;
let peso = 84;
let alturaEmM = 1.80;

let imc = peso / (alturaEmM**2);
let anoNascimento = 2022 - idade;

console.log(`${nome} tem ${idade} pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
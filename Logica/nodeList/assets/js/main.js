const paragrafos = document.querySelector('.paragrafo');

const teste = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;

teste.forEach((valor) =>{
    valor.style.backgroundColor = backgroundColor;
    valor.style.color = '#FFF';
})
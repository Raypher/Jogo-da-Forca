const paginaInicial = document.querySelector('.pagina-inicial');
const paginaJogo = document.querySelector('.pagina-jogo');
const paginaAdd = document.querySelector('.pagina-adicionar');

function iniciar(){
    paginaInicial.style.display = 'none';
    paginaJogo.style.display = 'block'
}
function adicionar(){
    paginaInicial.style.display = 'none'
    paginaAdd.style.display ='block'
}
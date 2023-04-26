let contador = document.getElementById('contador');
let i=15;
var imagens = document.getElementById('imagens');
let pokemons = document.querySelectorAll('img');
let lista = document.querySelectorAll('li');
let placar = document.getElementById('placar')

window.onload = function (){
    contar()
    imagens.addEventListener('click', clicarPokemon); 
}

function clicarPokemon(evento) {
    placar.innerHTML++;
    let idPokemonClicado = evento.target.id;
    pokemons.forEach(imagem => {
        if (imagem.id === idPokemonClicado) {
            imagem.parentElement.remove();
        }
    });
    lista.forEach(listaPoke =>{
    if (listaPoke.id === idPokemonClicado) {
        listaPoke.remove();
        }
    });
}

function contar(){
    setInterval(function() {
    contador.innerText = i;
    if(i <= 15 && i > 0){
        i--;
    } else if (i == 0) {
        imagens.removeEventListener('click', clicarPokemon); 
        }
    }, 1000);
}
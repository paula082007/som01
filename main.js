function TocaSom(selectorElemento){
    const elemento = document.querySelector(selectorElemento);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
}
    else {
        comsole.log('elemento ou selector não encontrado!')
    }

}
const listadeteclas = document.querySelectorAll('.tecla')

for(let contador = 0; contador < listadeteclas.length; contador++){

    const tecla = listadeteclas[contador]
    const efeito =  tecla.classList[1]
    const iAudio = `#som_${efeito}`;

    teclaonclick = function(){
              TocaSom(iAudio)
}
tecla.onkeydwon =function(evento) {
     console.log(evento.cod == 'Space')

    if(evento.code =='Tab') {
    tecla.classList.add('ativa')
        }

    }
    tecla.onkeydwon =function(){  
        teclaclassList.remove('ativa')
    }
}

//Declaração/criação da função TocaSom
function TocaSomPom(idElementosAudio){
    document.querySelector(idElementosAudio). play();
}
//chamda ou invocação da função tocaSomPom ao clicar no botão
const listadeteclas = document.querySelectorAll('.tecla')
for(let contador = 0; contador < listadeteclas.length; contador++){
    const tecla = listadeteclas[contador]
    const efeito =  teclaclassList[1]
    const iAudio = `#som_${efeito}`;
    teclaonclick = function(){
        TocaSom(iAudio)
}
tecla.onkeydwon =function(evento){
    if(evento.code!='Tab')
    tecla.classList.add('ativa')
}
    tecla.onkeydwon =function(){  
        teclaclassList.remove('ativa')
}
}

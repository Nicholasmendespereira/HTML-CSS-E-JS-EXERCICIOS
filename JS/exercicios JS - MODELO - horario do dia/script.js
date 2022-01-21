function carregar() {

    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var img = window.document.getElementById('imagem')
    msg.innerHTML = ` A Hora atual é   <strong>${hora} : ${min} : ${sec}</strong>`

    if (hora >= 0 && hora < 12) {
        //Bom dia !!!
        img.src = 'imagens/manha/imagemmanha01.png'
        document.body.style.background = '#D89B42'
         
    }else if (hora >= 12 && hora < 18) {
       // Boa tarde !!!   
        img.src = 'imagens/tarde/imagemtarde01.png'
        document.body.style.background = '#B15B1E'
    }else if (hora >= 18){
      // Boa noite !!!
        img.src = 'imagens/noite/imagemnoite01.png'
        document.body.style.background = '#4E3653'

    }
}
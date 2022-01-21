function carregar() {
    var data = new Date()
   //var hora = 2
    var hora = data.getHours()
    var min = data.getMinutes()
    console.log(`Olaá`)
    // Horaios do Dia !!!
    var link = window.document.getElementById('link')
    var horario = window.document.getElementById('horas')
    horario.innerHTML = `Este é o seu Horário do dia ${hora}:${min}`
    // Caminhos horarios
    var img = window.document.getElementById('img')
    // imagem
    var footer = window.document.getElementById('footer')

    if (hora > 0 && hora < 11) {
        document.body.style.background = '#F28A2E'
        window.document.getElementById('link').style.backgroundColor = '#735438' 
        window.document.getElementById('footer').style.backgroundColor = '#F2C438'
        
         
        
        
    }else if (hora > 11 && hora < 18) {
        img.src = 'imagens/imagemtarde.png'
        document.body.style.background = '#BFB065'
        window.document.getElementById('link').style.backgroundColor = '#595731' 
        window.document.getElementById('footer').style.backgroundColor = '#A64E55'
        
        
    }else {
        img.src = 'imagens/noite001.png'
        document.body.style.background = '#152840'
        window.document.getElementById('link').style.backgroundColor = '#F27405' 
        window.document.getElementById('footer').style.backgroundColor = '#F56E25'
    }

}
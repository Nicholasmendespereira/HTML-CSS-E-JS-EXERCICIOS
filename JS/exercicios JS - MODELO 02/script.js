function verificar() {
    var fano = window.document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os seus dados')
    }else  {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero ='Homem'

        }else if (fsex[1].checked) {
            genero= 'Mulher'
        }
        res.innerHTML = `Detectamos o genero ${genero} com ${idade} anos!` 
        
    }
}
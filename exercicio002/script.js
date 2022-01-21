function calcular() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var pass = window.document.getElementById('txtp')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pass.value)
    var cont = window.document.getElementById('contar')
     
    if(i == 0 || f == 0) {
        window.alert('[ERRO] Algum campo, está Vazio!')

    }else {
        for(var c = i;c <= f;c += p)
        cont.innerHTML += ` ${c},\u{1F911}  `
    }
    
}
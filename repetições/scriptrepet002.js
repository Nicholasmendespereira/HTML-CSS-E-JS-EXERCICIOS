function gerar() {
    var txtn = window.document.getElementById('txtn')
    var txttab = window.document.getElementById('txttab')
    var n = Number(txtn.value)
    var tab = Number(txttab.value)
    var msg = window.document.getElementById('msg')

    if (n == 0) {
        window.alert('[ERRO] Possui algum campo vazio!')
    }else {
        var c = n
        while (c <= 10) {
            var item = window.document.createElement('option')
            item.appendChild(tab)
        }
    }

}
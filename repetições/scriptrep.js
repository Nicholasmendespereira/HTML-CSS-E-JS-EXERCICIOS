function contar() {
    // caminhos inseridos
    let txti = window.document.getElementById('txti')
    let txtf = window.document.getElementById('txtf')
    let txtp = window.document.getElementById('txtp')

    // variaveis em numbers
    let i = Number(txti.value)
    let f = Number(txtf.value)
    let p = Number(txtp.value)

    // caminho Mensagem
    let msg = window.document.getElementById('msg')

    if (i == 0 || f == 0 || p == 0) {
        window.alert('[ERRO] Algum campo está em Branco!')
    }else {
        for(let c = i;c <= f;c += p) {
            msg.innerHTML += `\u{1F347} ${c}`
            txti.innerHTML = ``
        }
    }
    
    f.innerHTML = ``

}
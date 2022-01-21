
 var atualdata = new Date()
 //var day = atualdata.getDay()
 var day = 0
 var hora = atualdata.getHours()
 var min = atualdata.getMinutes()

 var data = window.document.getElementById('data')
 if (day == 0) {
    data.innerHTML = 'Hoje é Domingo !!!'
 }else if (day == 1) {
    data.innerHTML = 'Hoje é Segunda-feira !!'
 }else if (day == 2) {
    data.innerHTML = 'Hoje é Terça- feira !!!'
 }else if (day == 3) {
    data.innerHTML = 'Hoje é Quarta-feira !!!'
 }else if (day == 4) {
    data.innerHTML = 'Hoje é Quinta-feira !!!'
 }else if (day == 5) {
    data.innerHTML = 'Hoje é Sexta-feira !!!'
 }else {
    data.innerHTML = 'Hoje é Sabado !!!'
 }
 //data.innerHTML = `Data atual : ${day}/${mes}/${ano}`
    var atualhora = window.document.getElementById('atualhora') 
    atualhora.innerHTML= `${hora}:${min}`
 


function cadastrar() {
    var endrç = window.document.getElementById('endrç')
    var contato = window.document.getElementById('contato')
    var nome = window.document.getElementById('nome')

    var endereço = String(endrç.value)
  

   
    


}
function mostrar() {
    var data = new Date()
    var hora = data.getHours()
    var horas = window.document.getElementById('horas')
    horas.innerHTML = `${hora}`
}
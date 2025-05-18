function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'Images/manha.png'
        document.body.style.background = '#dbae85'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'Images/tarde.png'
        document.body.style.background = '#f8900f'
    } else {
        // BOA NOITE!
        img.src = 'Images/noite.png'
        document.body.style.background = '#1b689c'
    }
}

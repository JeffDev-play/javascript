function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados, e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'Images/foto-crianca-m.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                 img.setAttribute('src', 'Images/foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                 img.setAttribute('src', 'Images/foto-adulto-m.png')
            } else {
                // Idoso
                 img.setAttribute('src', 'Images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                 img.setAttribute('src', 'Images/foto-crianca-f.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                 img.setAttribute('src', 'Images/foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                 img.setAttribute('src', 'Images/foto-adulto-f.png')
            } else {
                // Idoso
                 img.setAttribute('src', 'Images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}

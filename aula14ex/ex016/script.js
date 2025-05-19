function contar() {
    var inicio = window.document.getElementById('txtini').value
    var fim = window.document.getElementById('txtfim').value
    var passo = window.document.getElementById('txtpas').value
    var res = window.document.getElementById('res')
    res.innerHTML = ''

    if (inicio == '' || (fim == '' || Number(fim) == 0)) 
    {
        res.innerHTML = 'Impossível contar!'
    } else if (Number(passo) == 0)
    {
        alert('Passo inválido! Considerando PASSO como 1')
        passo = '1'

        for (var i = Number(inicio); i <= Number(fim); i += Number(passo)) {
            res.innerHTML += i
            res.innerHTML += '&#x1F449'
        }
    } else
    {
        for (var i = Number(inicio); i <= Number(fim); i += Number(passo)) {
            res.innerHTML += i
            res.innerHTML += '&#x1F449'
        }
    }
    res.innerHTML += '&#x1F6A9'

    

}

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    if (hora >= 0 && hora < 6)
    {
        console.log('Bom Madrugada!')
    } else {
        console.log('Bom Dia!')
    }
   
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
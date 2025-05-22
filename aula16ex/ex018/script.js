let numbers = []
let txtArea = document.getElementById('txtres')
let inf = document.getElementById('txtinf')

function adicionarNum()
{
    let num = document.getElementById('txtn').value 
    num = Number(num)
    if ((num >= 1 && num <= 100) && numbers.includes(num) == false)
    {
        numbers.push(num)
        txtArea.innerHTML += `Valor ${num} adicionado. \n`
    } else 
    {
        alert('Valor inválido ou já encontrado na lista')
    }
}

function finalizar() 
{
    if (numbers.length == 0)
    {
        alert('Adicione os valores antes de finalizar!')
    } else
    {
        numbers.sort((a, b) => a - b)
        let somaNum = soma()
        let mediaNum = media()

        inf.innerHTML = ''
        inf.innerHTML += `<p>Ao todo, temos ${numbers.length} números cadastrados.</p>`
        inf.innerHTML += `<p>O maior valor informado foi ${numbers[numbers.length - 1]}.</p>`
        inf.innerHTML += `<p>O menor valor informado foi ${numbers[0]}.</p>`
        inf.innerHTML += `<p>Somando todos os valores, temos ${somaNum}.</p>`
        inf.innerHTML += `<p>A média dos valores digitados é ${mediaNum}.</p>`
    }
    
}

function soma()
{
    let res = 0
    for (let i = 0; i < numbers.length; i++)
    {
        res += numbers[i]
    }
    return res
}

function media()
{
    let res = 0
    for (let i = 0; i < numbers.length; i++)
    {
        res += numbers[i]
    }
    return res / numbers.length
}

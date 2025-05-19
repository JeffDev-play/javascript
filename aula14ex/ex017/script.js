function tabuada() 
{
    var num = document.getElementById('txtnum').value
    var res = document.getElementById('res')

    res.innerHTML = ""
    if (num == '')
    {
        alert('Por favor, digite um número!')
    } else 
    {
        num = Number(num)
        for (var i = 1; i <= 10; i++) 
        {
            res.innerHTML += `${num} x ${i} = ${num * i} \n`
        }
    }
    
}

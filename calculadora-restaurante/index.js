function formatValues (value){
    value= value.toFixed(2)
    return 'R$ ' + value
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercentage = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    



    let tipValue = bill * (tipPercentage/100)
    let billTotal = bill + tipValue
    let billEach = bill/split
    let tipEach = billEach * (tipPercentage/100)
    let totalWithTip = tipEach + billEach

    document.getElementById('tipPercentage').innerHTML = tipPercentage + ' %'
    document.getElementById('tipValue').innerHTML = formatValues(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatValues(billTotal)  
    document.getElementById('billEach').innerHTML = formatValues(billEach)
    document.getElementById('tipEach').innerHTML = formatValues(tipEach)
    document.getElementById('totalWithTipEach').innerHTML = formatValues(totalWithTip)
    

    if (split==1){
        document.getElementById('splitValue').innerHTML = split + ' pessoa'
    }
    else if (split>1){
        document.getElementById('splitValue').innerHTML = split + ' pessoas'
    }

}
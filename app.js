const amountElement = document.querySelector("#amount")
const firsSelect = document.querySelector("#firstCurrency")
const secondSelect = document.querySelector("#secondCurrency")
const currency = new Currency('USD','TRY')
const ui = new UI(firsSelect,secondSelect)

eventListeners()

function eventListeners(){
    amountElement.addEventListener('input',exchangeCurrency)
    firsSelect.onchange = function(){
        currency.changeFirstCurrency(firsSelect.options[firsSelect.selectedIndex].textContent)
        ui.changeFirst()
    }
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()
    }
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value)
    currency.exchange()
    .then(result =>{
      ui.displayResult(result)  
    })
    .catch(err=> console.log(err))
}
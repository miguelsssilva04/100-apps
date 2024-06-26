
//Dragable Item

let newX = 0, newY = 0, startX = 0, startY = 0;

const windowCalculator = document.getElementById('position-size-calculator-window');
const windowHeader = document.getElementById('position-size-calculator-window-header');

windowHeader.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    windowCalculator.style.top = (windowCalculator.offsetTop - newY) + 'px'
    windowCalculator.style.left = (windowCalculator.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

//Open window

const pscButton = document.getElementById('position-size-calculator');

pscButton.addEventListener('dblclick', function(){
    if (windowCalculator.style.display === 'none'){
        windowCalculator.style.display = 'flex';

    }else{
        windowCalculator.style.display = 'none';
    }
})


//Close window

const closeButton = document.querySelector('.x-div');

closeButton.addEventListener('click', function(){
    if (windowCalculator.style.display === 'flex'){
        windowCalculator.style.display = 'none';

    }else{
        windowCalculator.style.display = 'flex';
    }
})

//Calculator Function

function calculatePositionSize() {
    const accountCurrency = document.getElementById('account-currency').value;
    const accountSize = parseFloat(document.getElementById('account-size').value);
    const riskPercentage = parseFloat(document.getElementById('rr-ratio-%').value);
    const stopLossSize = parseFloat(document.getElementById('account-currency').value);
    const currencyPair = document.getElementById('currency-pair').value;

    const riskAmount = accountSize * (riskPercentage/100)

    let pipValue;
    if (currencyPair === "eurusd" || currencyPair === "gbpusd" || currencyPair === "nzdusd"|| currencyPair === "audusd") {
        if (accountCurrency === "USD") {
            pipValue = 10; //For standard lot
        } else if(accountCurrency === "EUR"){
            pipValue = 10*1.07;
        } else if(accountCurrency === "GBP"){
            pipValue = 10*1.27;
        }
    } else if (currencyPair === "usdjpy"){
        if (accountCurrency === "USD"){
            pipValue = 6.25;
        }else if (accountCurrency === "EUR"){
            pipValue = 6.25*1.07;
        }else if (accountCurrency === "GBP"){
            pipValue = 6.25*1.27;
        }

    } else if (currencyPair === "usdchf"){
        if (accountCurrency === "USD"){
            pipValue = 11.14;
        } else if(accountCurrency === "EUR") {
            pipValue = 11.14 * 1.07;
        } else if (accountCurrency === "GBP"){
            pipValue = 11.14 *1.27;
        }
    }else if (currencyPair === "usdcad") {
        if (accountCurrency === "USD"){
            pipValue = 7.31;
        } else if (accountCurrency === "EUR"){
            pipValue = 7.31*1.07;
        } else if (accountCurrency === "GBP"){
            pipValue = 7.31*1.07;
        }
    }
    //Calcular position size
    const positionSize = riskAmount / (stopLossSize * pipValue);

    document.getElementById('calculator-value').textContent = '${positionSize}'

}
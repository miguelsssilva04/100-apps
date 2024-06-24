
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



//Collase options once we open a window





//Close window

const closeButton = document.querySelector('.x-div');

closeButton.addEventListener('click', function(){
    if (windowCalculator.style.display === 'flex'){
        windowCalculator.style.display = 'none';

    }else{
        windowCalculator.style.display = 'flex';
    }
})
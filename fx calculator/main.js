
//Dropdown Function
const openButton = document.getElementById('dropdown-Button');
const options = document.getElementById('options');

openButton.addEventListener('click', function(){
    if (options.style.display === 'none'){
        options.style.display = 'flex';
    }else {
        options.style.display = 'none';
    }
    if (options.style.display === 'flex'){
        openButton.classList.add('rotated');

    }else{
        openButton.classList.remove('rotated');
    }

})






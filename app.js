/* Variables for DOM elements */
const togglerSwitch = document.querySelector('.toggle-switch');
const togglerSlider = document.querySelector('.toggle-slider');
const calculatorScreen = document.querySelector('.calculator-screen');
const btnReset = document.querySelector('.btn-reset');
// const btnDel = document.querySelector('.btn-del');
// const btnEquals = document.querySelector('.btn-equals');
// const btn = document.querySelectorAll('.btn');

const btnGridContainer = document.querySelector('.grid-container');

btnGridContainer.addEventListener("click", handleButtonClick);

function handleButtonClick(e) {
    
    if(e.target.classList.contains('btn')){
        console.log('Clicked button');
        console.log(e.target);
    }
}
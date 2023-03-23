let counterDisplay = document.querySelector('.result');
let counterDecrease = document.querySelector('.counter-decrese');
let reset = document.querySelector('.reset')
let counterIncrease = document.querySelector('.counter-increase');


let count = Number(counterDisplay.innerText);

// updateDiplay();

counterIncrease.addEventListener("click",()=>{
    count++;
    counterDisplay.innerText = count;
    // updateDiplay();
});

counterDecrease.addEventListener("click",()=>{
    count--;
    counterDisplay.innerText = count;
    // updateDiplay();
});

// function updateDiplay(){
//     counterDisplay.innerHT = count;
// };

reset.addEventListener("click",()=>{
    counterDisplay.innerText = 0;
})
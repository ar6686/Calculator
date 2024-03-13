let btns = document.querySelectorAll('button');
let display = document.querySelector('input');



btns.forEach(button => {
    button.addEventListener('click', function () {
        const buttonValue = this.innerHTML;
        display.value += buttonValue;
    });
});


let C = document.querySelector('.C');
C.addEventListener('click', () => {
    display.value = '';
});


let DE = document.querySelector('.DE');
DE.addEventListener('click', () => {
  display.value = display.value.toString().slice(0, -3);
});

let equal = document.querySelector('#equal');
equal.addEventListener('click', () =>{
    display.value = display.value.toString().slice(0, -1);

  try{
    display.value = eval(display.value);
  }
  catch{
    display.value = 'Error';
  }
})
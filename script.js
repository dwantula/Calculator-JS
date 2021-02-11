var buttons = document.querySelectorAll('button:not(#equal-button)')
var equalButton = document.getElementById('equal-button');
var display = document.querySelector('.display');
var clearButton = document.querySelector('#clear-button');

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    display.innerText += event.target.innerText
  })
}

equalButton.addEventListener('click', function() {
  var result = eval(display.innerText);
  display.innerText = result
})

clearButton.addEventListener('click', function() {
    var clear = "" ;
    display.innerText = clear;
    
})
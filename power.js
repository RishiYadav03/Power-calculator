var textbox = document.getElementById('NumberInput');

document.querySelector('#x1').onclick = function (){
    document.getElementById('result').innerHTML = `
    Square of the number: ${textbox.value ** 2}`
}

document.querySelector('#x2').onclick = function (){
    document.getElementById('result').innerHTML = `
    Cube of the number: ${textbox.value ** 3}`
}

document.querySelector('#x3').onclick = function (){
    document.getElementById('result').innerHTML = `
    Positive value of the number: ${Math.abs(textbox.value)}`
}
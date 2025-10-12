const numberText = document.getElementById("numberText");
const fahrenheit = document.getElementById("fahrenheit");
const Celsius = document.getElementById("Celsius");
const result = document.getElementById("result");
let temp;

function convert (){

    if(fahrenheit.checked){
        temp = Number(numberText.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (Celsius.checked){
        temp = Number(numberText.value);
        temp = (temp -32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°c"
    }
    else{
        result.textContent = `Select Unit`;
    }
}
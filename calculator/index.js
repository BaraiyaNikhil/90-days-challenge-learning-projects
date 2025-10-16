const display = document.getElementById("display");

function appendToDisplay(input){
 display.value += input;
}

function clearDisplay(){
display.value = "";
}

function calculate() {
  try {
    const result = eval(display.value);
    if (result === undefined || isNaN(result)) {
      throw new Error("Invalid calculation");
    }
    display.value = result;
  } catch (e) {
    clearDisplay();
    alert("Invalid input");
  }
}

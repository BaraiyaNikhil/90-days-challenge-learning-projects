
function rollDice(){
    
    const diceNumber = document.getElementById("dice_number").value;
    const diceResult = document.getElementById("dice_result");
    const diceImages = document.getElementById("dice_images");
    const values = [];
    const images = [];

    for(let i = 0; i < diceNumber; i++){
    const value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
    images.push(`<img src="imgs/dice-${value}.png" alt="dice-${value}" width="100px">`)
    }

    diceResult.textContent = `Dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}
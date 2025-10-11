const countLable = document.getElementById("countLable");
const decreaseBtn = document.getElementById("decreaseBtn");
const reset = document.getElementById("reset");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = () => {
    if (count == 0) {count = 0; return; }
    count--;
    countLable.textContent = count;
}

increaseBtn.onclick = () => {
    count++;
    countLable.textContent = count;
}

reset.onclick = () => {
    count = 0;
    countLable.textContent = count;
}
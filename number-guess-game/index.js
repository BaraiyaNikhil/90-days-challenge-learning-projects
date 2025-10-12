const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let attempts = 0;
let guess;
let running = true;
const result = document.getElementById("result");

do {
    guess = Number(prompt(`Guess the Number between ${minNum} to ${maxNum} !`));

    if (isNaN(guess)) {
        alert(`Please enter vaild Number betwwen ${minNum} to ${maxNum} !`);
    }
    else if (guess < 1 || guess > 100) {
        alert(`Please enter vaild Number betwwen ${minNum} to ${maxNum} !`);
    }
    else if (guess < answer) {
        alert(`Too Low !`);
        ++attempts;
    }
    else if (guess > answer) {
        alert(`Too High !`);
        ++attempts;
    } else {
        ++attempts;
        result.textContent = `congretulations You guess correct ! answer is ${answer} !`;
        document.getElementById("attempts").textContent += attempts;
        running = false;
    }
} while (running);
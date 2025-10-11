const otp = document.getElementById("otp");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = () => {
    //Math.random always give number 0 to 0.999 it will never give exect 0
    //so for formula of getting range number is ((Max - Min + 1) + Min)
    otp.textContent = Math.floor(Math.random() * 9000 + 1000);
}
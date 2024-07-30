const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = `"!@#$%^&*()~<>:",.;'/"?`;

// const allChar = upperCase + lowerCase + symbol + number;
const allChar = lowerCase + symbol + number + upperCase + symbol + lowerCase + number + symbol ;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
    document.querySelector(".display img").src = "Images/copy.png";
    document.querySelector(".display img").style.width = "25px";
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    document.querySelector(".display img").src = "Images/done.png";
    document.querySelector(".display img").style.width = "29px";

}
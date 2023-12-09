const advButton = document.querySelector(".advButton");

let number;
let inputValue;
let erros = 0;
let acertos = 0;
let tentativas = 10;
let win = false;

const wrongElement = document.querySelector(".wrong");
const winningMessageTextElement = document.querySelector(
  ".winning-message-text"
);
const winningMessage = document.querySelector(".winning-message");
const restartButton = document.querySelector(".winning-message-button");
const tips = document.querySelector(".tips");
let num = document.querySelector(".num");

const startGame = () => {
  number = parseInt(Math.random() * 50);

  winningMessage.classList.remove("show-winning-message");
};

advButton.onclick = function () {
  checkForWin();
};

document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkForWin();
    
  }
});

const Tips = () => {
  if (inputValue < number && inputValue > 0 && inputValue < 50) {
    tips.textContent = "É maior!";
    tips.classList.add("show-tips");
  } else if (inputValue > number && inputValue > 0 && inputValue < 50) {
    tips.textContent = "É menor!";
    tips.classList.add("show-tips");
  } else if (inputValue < 0 || inputValue > 50) {
    tips.textContent = "Inválido! O número está entre 0 e 50!";
    tips.classList.add("show-tips");
  }
};

const winMsg = () => {
  if (win) {
    acertos++;
    tentativas = 10;
    scoreUpdate();
    winningMessage.classList.add("show-winning-message");
    wrongElement.classList.remove("show-wrong");
    tips.classList.remove("show-tips");
    num.textContent = number;
  } else if (tentativas == 0) {
    erros++;
    scoreUpdate();
    winningMessageTextElement.innerText = "Perdeu!";
    winningMessage.classList.add("show-winning-message");

    num.textContent = number;
  }
};

const checkForWin = () => {
  inputValue = parseInt(document.querySelector(".tryNum").value);
  if (inputValue == number && inputValue > 0 && inputValue < 50) {
    win = true;
  } else if (inputValue != number && inputValue > 0 && inputValue < 50) {
    tentativas--;
    scoreUpdate();
    win = false;
  }

  Tips();
  winMsg();
};

const scoreUpdate = () => {
  document.querySelector(".tentativas").textContent = tentativas;
  document.querySelector(".erros").textContent = erros;
  document.querySelector(".acertos").textContent = acertos;
  if (tentativas >= 0) {
    wrongElement.classList.add("show-wrong");
  }
};

startGame();

restartButton.addEventListener("click", startGame);
let activePlayer = 1;
let score = 0;
let scoreP1 = 0;
let scoreP2 = 0;

const roll = document.getElementById("rollDice");
const hold = document.getElementById("hold");
const dice = document.getElementById("dice");
const p1 = document.querySelector(".player1");
const p2 = document.querySelector(".player2");

function rollDice() {
  const diceFace = Math.floor(Math.random() * 6 + 1);
  dice.src = `/images/dice-${diceFace}.png`;
  score =+ diceFace;
}

const updateDisplayPlayer = function () {
  p1.classList.toggle("active");
  p2.classList.toggle("active");

  if (activePlayer === 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
};

const updateCurrentScore = function () {
  rollDice();
  if (score !== 1) {
    document.querySelector(
      ".active"
    ).children[1].children[1].innerHTML = `${score}`;
  } else {
    updateDisplayPlayer();
  }
};

roll.addEventListener("click", updateCurrentScore);

hold.addEventListener("click", updateDisplayPlayer);

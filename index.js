let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "emma",
  chips: 145,
};

const messageEL = document.getElementById("message-el");
const sumEL = document.querySelector("#sum-el");
const cardEL = document.querySelector("#card-el");
const playerEL = document.getElementById("player-el");

playerEL.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEL.textContent += cards[i] + " ";
  }

  sumEL.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "wohoo, you got black jack";
    hasBlackJack = true;
  } else {
    message = "you are out of the game";
    isAlive = false;
  }
  messageEL.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

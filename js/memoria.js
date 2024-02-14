const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
  { name: "bee", image: "./img/piloto1.jpg" },
  { name: "crocodile", image: "./img/piloto2.jpg" },
  { name: "macaw", image: "./img/piloto3.jpg" },
  { name: "gorilla", image: "./img/piloto4.jpg" },
  { name: "tiger", image: "./img/piloto5.jpg" },
  { name: "monkey", image: "./img/piloto6.jpg" },
  { name: "chameleon", image: "./img/piloto7.jpg" },
  { name: "piranha", image: "./img/piloto8.jpg" },
  { name: "anaconda", image: "./img/piloto9.jpg" },
  { name: "sloth", image: "./img/piloto10.jpg" },
  { name: "cockatoo", image: "./img/piloto11.jpg" },
  { name: "toucan", image: "./img/piloto12.jpg" },
  { name: "macaw", image: "./img/piloto13.jpg" },
  { name: "gorilla", image: "./img/piloto14.jpg" },
  { name: "tiger", image: "./img/piloto15.jpg" },
  { name: "monkey", image: "./img/piloto16.jpg" },
  { name: "chameleon", image: "./img/piloto17.jpg" },
  { name: "piranha", image: "./img/piloto18.jpg" },
  { name: "anaconda", image: "./img/piloto19.jpg" },
  { name: "sloth", image: "./img/piloto20.jpg" }
];

let seconds = 0,
  minutes = 0;
let movesCount = 0,
  winCount = 0;

const timeGenerator = () => {
  seconds += 1;
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Tiempo:</span>${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Movimientos:</span>${movesCount}`;
};

const generateRandom = (size = 4, numRows = 4, numCols = 5) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (numRows * numCols) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues, numRows = 4, numCols = 5) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  cardValues.sort(() => Math.random() - 0.5);

  for (let i = 0; i < numRows * numCols; i++) {
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
          <img src="${cardValues[i].image}" class="image"/>
        </div>
     </div>
     `;
  }
  gameContainer.style.gridTemplateColumns = `repeat(${numCols}, auto)`;

  // Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("matched")) {
      card.classList.add("flipped");

      if (!firstCard) {
        firstCard = card;
        firstCardValue = card.getAttribute("data-card-value");
      } else {
        movesCounter();
        secondCard = card;
        let secondCardValue = card.getAttribute("data-card-value");

        if (firstCardValue === secondCardValue && firstCard !== secondCard) {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          firstCard = false;
          winCount += 1;

          if (winCount === Math.floor(cardValues.length / 2)) {
            result.innerHTML = `<h2>¡FELICIDADES! Te ganaste un beso</h2>
            <h4>Movimientos: ${movesCount}</h4>`;
            stopGame();
          }
        } else {
          let [tempFirst, tempSecond] = [firstCard, secondCard];
          firstCard = false;
          secondCard = false;
          let delay = setTimeout(() => {
            tempFirst.classList.remove("flipped");
            tempSecond.classList.remove("flipped");
          }, 900);
        }
      }
    }
  });
});
};

startButton.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  controls.classList.add("hide");
  stopButton.classList.remove("hide");
  startButton.classList.add("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `<span>Movimientos:</span> ${movesCount}`;
  initializer();
});

stopButton.addEventListener(
  "click",
  (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);

const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom(5); 
  console.log(cardValues);
  matrixGenerator(cardValues, 4, 5);
};

initializer();
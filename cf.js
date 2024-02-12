const score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  turn: 0,
};

const playerScore = document.querySelector("#js-playerScore");
const computerScore = document.querySelector("#js-botScore");
const winner = document.querySelector(".js-result");

playerScore.innerHTML = `${score.win}`;
computerScore.innerHTML = `${score.loss}`;

function winnerResult() {
  if(score.win === 0 && score.loss === 0){
    winner.innerHTML = 'Game not played yet!!'
  }
  if (score.win > score.loss) {
    winner.innerHTML = "You won! :)";
  } else if (score.win === score.loss && score.turn > 0) {
    winner.innerHTML = "It's a tie!";
  } else if(score.win === score.loss){
    winner.innerHTML = 'Game not played yet!!'
  }
  else  {
    winner.innerHTML = "You lost :(";
  }
}

function botChoice() {
  const choice = Math.random() < 0.5 ? "heads" : "tails";
  return choice;
}

function result(playerChoice) {
  if (score.turn !== 5) {
    winner.innerHTML = '';
    if (playerChoice === botChoice()) {
      score.win++;
      score.turn++;
    } else {
      score.loss++;
      score.turn++;
    }
  } else {
    reset();
    playerScore.innerHTML = `${score.win}`;
    computerScore.innerHTML = `${score.loss}`;
  }

  playerScore.innerHTML = `${score.win}`;
  computerScore.innerHTML = `${score.loss}`;
  localStorage.setItem("score", JSON.stringify(score));
}

function reset() {
  winnerResult();
  score.win = 0;
  score.loss = 0;
  score.turn = 0;
  localStorage.removeItem("score");
  playerScore.innerHTML = `${score.win}`;
  computerScore.innerHTML = `${score.loss}`;
}

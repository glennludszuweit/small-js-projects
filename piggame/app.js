/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

document.querySelector(".btn-roll").addEventListener("click", () => {
  if (gamePlaying) {
    // random number generator
    let dice = Math.floor(Math.random() * 6) + 1;
    // display number
    let diceImage = document.querySelector(".dice");
    diceImage.style.display = "block";
    diceImage.src = "dice-" + dice + ".png";
    // let dice0 = Math.floor(Math.random() * 6) + 1;
    // let dice1 = Math.floor(Math.random() * 6) + 1;
    // document.getElementById("dice-0").style.display = "block";
    // document.getElementById("dice-1").style.display = "block";
    // document.getElementById("dice-0").src = "dice-" + dice0 + ".png";
    // document.getElementById("dice-1").src = "dice-" + dice1 + ".png";

    //update round score
    if (dice === 6 && lastDice === 6) {
      scores[activePlayer] = 0;
      document.getElementById("score-" + activePlayer).innerHTML = 0;
      nextPlayer();
    } else if (dice !== 1) {
      // add score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
    } else {
      // next player turn
      nextPlayer();
    }
    lastDice = dice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  if (gamePlaying) {
    //add current to global score
    scores[activePlayer] += roundScore;

    // update UI
    document.getElementById("score-" + activePlayer).innerHTML =
      scores[activePlayer];
    let input = document.querySelector(".final-score").value;
    let winningScore;
    // add wining score target
    if (input) {
      winningScore = input;
    } else {
      winningScore = 50;
    }

    //check if player wins
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).innerHTML = "Winner!!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // next Player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").innerHTML = "0";
  document.getElementById("score-1").innerHTML = "0";
  document.getElementById("current-0").innerHTML = "0";
  document.getElementById("current-1").innerHTML = "0";
  document.querySelector("#name-0").innerHTML = "Player 1";
  document.querySelector("#name-1").innerHTML = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".final-score").value = "";
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").innerHTML = "0";
  document.getElementById("current-1").innerHTML = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

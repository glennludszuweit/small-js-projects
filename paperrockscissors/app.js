let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //const smallUserWord ="user".fontsize(4).sub();
    //const smallCompWord ="comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}! You Win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("green-glow");
    }, 1500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //const smallUserWord ="user".fontsize(4).sub();
    //const smallCompWord ="comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}! You Lost!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("red-glow");
    }, 1500);
}

function draw(userChoice, computerChoice) {
    //const smallUserWord ="user".fontsize(4).sub();
    //const smallCompWord ="comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} is equal to ${convertToWord(computerChoice)}! Draw!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("gray-glow");
    }, 1500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

//------------------------------------------------------CLOCK 
function tiktok() {
    const fullTime = new Date();
    let hours = fullTime.getHours();
    let mins = fullTime.getMinutes();
    let secs = fullTime.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById("hour").innerHTML = hours + " :";
    document.getElementById("min").innerHTML = mins + " :";
    document.getElementById("sec").innerHTML = secs;
}

setInterval(tiktok, 100);
//--------------------------------------------------------CLOCK END
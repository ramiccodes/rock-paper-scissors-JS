let computerChoice = ['Rock', 'Paper', 'Scissors'];
let winners =[];

function computerPlay(array) {
    const randomIndex = Math.floor(Math.random() * (computerChoice.length));
    let item = array[randomIndex];
    let compEqual = item.toUpperCase();
    return compEqual;
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'No One').length;
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
    if (computerWins >= 5) {
        emoji.textContent = '🤖🤖🤖';
        victoryMessage.textContent = 'Machines have bested humanity!';
        bg.style.backgroundColor = '#f7f8fa';
        document.body.style.backgroundColor = '#CB0600';
        reset.style.display = 'block';
        reset.style.marginLeft = '130px';
    }
    else if (playerWins >= 5) {
        emoji.textContent = '👨‍💻👩‍💻';
        victoryMessage.textContent = 'Humanity reigns supreme over the machines!';
        bg.style.backgroundColor = '#f7f8fa';
        document.body.style.backgroundColor = '#6DB966';
        reset.style.display = 'block';
        reset.style.marginLeft = '130px';
    }
}

function logRound(selectionName, select, winner) {
    console.log('Player Chose:', selectionName);
    console.log('Computer Chose:', select);
    console.log(winner, "Won the Round");
    console.log('-------------------------------');
    }


function playRound(selectionName) {
    let select = computerPlay(computerChoice);
    if (select === "SCISSORS") {
        computer.textContent = '✌️';
    }
    else if (select === "PAPER") {
        computer.textContent = '✋';
    }
    else if (select === "ROCK") {
        computer.textContent = '👊';
    };
    let winner = checkWinner(selectionName, select);
    winners.push(winner)
    logRound(selectionName, select, winner)
}

function game(selectionName) {
    playRound(selectionName);
    checkWinner();
    logWins();
    tallyWins();
}

function checkWinner(selectionName, select) {
    if (selectionName === select) {
        return 'No One';
    }
    else if (
        (selectionName === 'ROCK' && select == 'SCISSORS') ||
        (selectionName === 'PAPER' && select == 'ROCK') ||
        (selectionName === 'SCISSORS' && select == 'PAPER')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }    
}

function tallyWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'No One').length;
    playerScore.textContent = `${playerWins}`;
    computerScore.textContent = `${computerWins}`;
}


function resetGame() {
    winners = [];
    playerScore.textContent = `0`;
    computerScore.textContent = `0`;
    selectionName = '';
    select = '';
    player.textContent = '';
    computer.textContent = '';
    emoji.textContent = '';
    victoryMessage.textContent = '';
    reset.style.display = 'none';
    bg.style.backgroundColor = '#f7f8fa';
    document.body.style.backgroundColor = '#f7f8fa';
}

// Event Listeners and Selectors 
const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        let selectionName = selectionButton.dataset.selection;
        if (selectionName == "SCISSORS") {
            player.textContent = '✌️';
        }
        else if (selectionName == "PAPER") {
            player.textContent = '✋';
        }
        else if (selectionName == "ROCK") {
            player.textContent = '👊';
        }
        game(selectionName);
    })
});


const border = document.querySelector('.border');
const div = document.createElement('div');
const pic = document.querySelector('.pic');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const victoryMessage = document.querySelector('.victorymessage');
const bg = document.querySelector('.bg');
const emoji = document.querySelector('.emoji');
const reset = document.querySelector('.reset');
div.style.marginTop = "1rem";
div.style.display = "flex";
div.style.justifyContent = 'space-evenly';
player.textContent = '';
computer.textContent= '';
player.style.fontSize = '50px';
computer.style.fontSize = '50px';
emoji.style.display = 'flex';
emoji.style.justifyContent = 'center';
emoji.style.fontSize = '50px';
victoryMessage.style.textAlign = 'center';







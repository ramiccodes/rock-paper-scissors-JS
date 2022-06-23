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
    if (playerWins < computerWins) {
        console.log('🤖🤖🤖 Machines have bested Humanity 🤖🤖🤖')
    }
    else if (playerWins > computerWins) {
        console.log('👨‍💻👩‍💻 Humanity reigns supreme over the machines! 👨‍💻👩‍💻')
    }
}

function logRound(playerSelection, select, winner,round) {
    console.log('Round:', round);
    console.log('Player Chose:', playerSelection);
    console.log('Computer Chose:', select);
    console.log(winner, "Won the Round");
    console.log('-------------------------------');
    }

let select = computerPlay(computerChoice);


function playRound(round) {
    const playerSelection = prompt('Rock, Paper, Scissors?').toUpperCase();
    let select = computerPlay(computerChoice);
    let winner = checkWinner(playerSelection, select);
    winners.push(winner)
    logRound(playerSelection, select, winner, round)
}

   

    
function game() {
    for (let i = 1; i <= 5; i++) {
    playRound(i);
    }
    checkWinner();
    logWins();
}




function checkWinner(playerSelection, select) {
    if (playerSelection === select) {
        return 'No One';
    }
    else if (
        (playerSelection === 'ROCK' && select == 'SCISSORS') ||
        (playerSelection === 'PAPER' && select == 'ROCK') ||
        (playerSelection === 'SCISSORS' && select == 'PAPER')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }    
}
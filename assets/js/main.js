document.addEventListener('DOMContentLoaded', (event) => {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const playerChoiceElement = document.getElementById('player-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const resultMessageElement = document.getElementById('result-message');

    const choices = ['rock', 'paper', 'scissors'];
    const icons = {
        'rock': 'fa-hand-back-fist',
        'paper': 'fa-hand',
        'scissors': 'fa-hand-scissors'
    };

    let playerScore = 0;
    let computerScore = 0;

    document.querySelectorAll('.options li').forEach(option => {
        option.addEventListener('click', () => {
            const playerChoice = option.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            playerChoiceElement.innerHTML = `<i class="fa-regular ${icons[playerChoice]}"></i>`;
            computerChoiceElement.innerHTML = `<i class="fa-regular ${icons[computerChoice]}"></i>`;
            const result = getResult(playerChoice, computerChoice);

            if (result === 'win') {
                playerScore++;
                resultMessageElement.textContent = 'You win!';
            } else if (result === 'lose') {
                computerScore++;
                resultMessageElement.textContent = 'You lose!';
            } else {
                resultMessageElement.textContent = 'It\'s a draw!';
            }

            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
        });
    });

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }
        if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')) {
            return 'win';
        } else {
            return 'lose';
        }
    }
});

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();


function updateScore(){
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

let isAutoPlaying = false;
let intervalId;
    function autoPlay(){
      if(!isAutoPlaying){
       intervalId = setInterval(function() {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        },1000);
        isAutoPlaying = true;
      }
      else{
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
      
      
    }


    function playGame(playerMove){
const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'scissor'){
      if(computerMove === 'rock'){
    result = 'You Lose.';
    }
    else if(computerMove === 'paper'){
    result = 'You Win.'
    }
    else if(computerMove === 'scissor'){
    result = 'Tie.'
    }
    }

    if(playerMove === 'paper'){
      if(computerMove === 'rock'){
      result = 'You Win.';
  }
  else if(computerMove === 'paper'){
    result = 'Tie.'
  }
  else if(computerMove === 'scissor'){
    result = 'You Lose.'
  }
    }

    if(playerMove === 'rock'){
      if(computerMove === 'rock'){
        result = 'Tie.';
      }
      else if(computerMove === 'paper'){
        result = 'You Lose.'
      }
      else if(computerMove === 'scissor'){
        result = 'You Win.'
      }
    }
  
    if(result === 'You Win.'){
      score.wins++;
    }
    else if(result === 'You Lose.'){
      score.losses++;
    }
    else if(result === 'Tie.'){
      score.ties++;
    }

    


    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
<img src="rock-paper-scissors/${playerMove}-emoji.png" class="move-icons">
<img src="rock-paper-scissors/${computerMove}-emoji.png" class="move-icons">
Computer`

   /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);*/
    }

function pickComputerMove(){

    let computerMove = '';
    const randomNumber = Math.random()

if(randomNumber >= 0 && randomNumber < 1/3){
  computerMove = 'rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'paper';
}
else if(randomNumber >=2/3 && randomNumber <1){
  computerMove = 'scissor';
}

return computerMove;
  }

